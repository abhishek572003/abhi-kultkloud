"use client";

import { useMemo, useState } from "react";
import CopyButton from "../_components/CopyButton";

const toInt = (ip: string) => {
  const parts = ip.split(".");
  if (parts.length !== 4) return null;
  let n = 0;
  for (const part of parts) {
    if (!/^\d{1,3}$/.test(part)) return null;
    const v = Number(part);
    if (v > 255) return null;
    n = n * 256 + v;
  }
  return n >>> 0;
};
const toIp = (n: number) => [24, 16, 8, 0].map(s => (n >>> s) & 255).join(".");
const maskOf = (p: number) => (p === 0 ? 0 : (0xffffffff << (32 - p)) >>> 0);
const fmt = (n: number) => n.toLocaleString("en-US");

function privateRange(n: number) {
  if ((n & maskOf(8)) >>> 0 === toInt("10.0.0.0")) return "Private (RFC 1918, 10.0.0.0/8)";
  if ((n & maskOf(12)) >>> 0 === toInt("172.16.0.0")) return "Private (RFC 1918, 172.16.0.0/12)";
  if ((n & maskOf(16)) >>> 0 === toInt("192.168.0.0")) return "Private (RFC 1918, 192.168.0.0/16)";
  return "Public address space";
}

export default function SubnetCalculator() {
  const [input, setInput] = useState("10.0.0.0/16");
  const [split, setSplit] = useState(24);

  const result = useMemo(() => {
    const m = input.trim().match(/^(\d{1,3}(?:\.\d{1,3}){3})\/(\d{1,2})$/);
    if (!m) return { error: "Use CIDR notation, for example 10.0.0.0/16." };
    const ip = toInt(m[1]);
    const prefix = Number(m[2]);
    if (ip === null) return { error: "Each part of the address must be 0–255." };
    if (prefix > 32) return { error: "The prefix must be between /0 and /32." };
    const mask = maskOf(prefix);
    const network = (ip & mask) >>> 0;
    const size = 2 ** (32 - prefix);
    const broadcast = (network + size - 1) >>> 0;
    const usable = prefix >= 31 ? size : size - 2;
    const awsOk = prefix >= 16 && prefix <= 28;
    return { prefix, network, broadcast, size, usable, mask, awsOk, aligned: network === ip };
  }, [input]);

  const subnets = useMemo(() => {
    if ("error" in result || split <= result.prefix || split > 32) return null;
    const count = 2 ** (split - result.prefix);
    const step = 2 ** (32 - split);
    const shown = Math.min(count, 8);
    return { count, rows: Array.from({ length: shown }, (_, i) => `${toIp((result.network + i * step) >>> 0)}/${split}`) };
  }, [result, split]);

  return (
    <div className="kk-tool-body">
      <div className="kk-field-row">
        <label className="kk-field">
          <span>Network (CIDR)</span>
          <input value={input} onChange={e => setInput(e.target.value)} spellCheck={false} autoComplete="off" inputMode="text" />
        </label>
        <label className="kk-field kk-field-small">
          <span>Split into /</span>
          <input type="number" min={1} max={32} value={split} onChange={e => setSplit(Number(e.target.value))} />
        </label>
      </div>
      {"error" in result ? <p className="kk-tool-error" role="alert">{result.error}</p> : <>
        {!result.aligned && <p className="kk-tool-note">That address is inside the network. The network itself starts at {toIp(result.network)}.</p>}
        <dl className="kk-results">
          <div><dt>Network</dt><dd>{toIp(result.network)}/{result.prefix}</dd></div>
          <div><dt>Subnet mask</dt><dd>{toIp(result.mask)}</dd></div>
          <div><dt>Address range</dt><dd>{toIp(result.network)} – {toIp(result.broadcast)}</dd></div>
          <div><dt>Total addresses</dt><dd>{fmt(result.size)}</dd></div>
          <div><dt>Usable hosts</dt><dd>{fmt(result.usable)}</dd></div>
          <div><dt>Usable in an AWS subnet</dt><dd>{result.awsOk ? fmt(result.size - 5) : "AWS subnets must be /16 to /28"}</dd></div>
          <div className="kk-results-wide"><dt>Range type</dt><dd>{privateRange(result.network)}</dd></div>
        </dl>
        {subnets && <div className="kk-subnets">
          <p><b>{fmt(subnets.count)}</b> subnets of /{split}{subnets.count > 8 ? ", first 8 shown" : ""}:</p>
          <ul>{subnets.rows.map(r => <li key={r}><code>{r}</code><CopyButton text={r} /></li>)}</ul>
        </div>}
      </>}
    </div>
  );
}
