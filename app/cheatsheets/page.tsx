import type { Metadata } from "next";
import CheatSheets from "./CheatSheets";
import { commandCount, sheets } from "../_data/cheatsheets";

export const metadata: Metadata = {
  title: "Cheat sheets",
  description: "Searchable, copy-ready commands for Linux, Git, Docker, kubectl and Terraform, each explained in one line.",
};

export default function CheatSheetsPage() {
  return <main className="kk-page">
    <header className="kk-page-head">
      <h1>Cheat sheets you will actually keep open.</h1>
      <p>{commandCount} everyday commands across {sheets.map(s => s.name).join(", ")}. Each one says what it does in plain English. Search, filter, copy. Replace anything in &lt;angle brackets&gt; with your own value.</p>
    </header>
    <CheatSheets />
  </main>;
}
