import type { Metadata } from "next";
import { PageBanner } from "../_components/Kit";
import CheatSheets from "./CheatSheets";
import { commandCount, sheets } from "../_data/cheatsheets";

export const metadata: Metadata = {
  title: "Cheat sheets",
  description: "Searchable, copy-ready commands for Linux, Git, Docker, kubectl and Terraform, each explained in one line.",
};

export default function CheatSheetsPage() {
  return <><PageBanner title="Cheat sheets" sub={`${commandCount} everyday commands across ${sheets.map(s => s.name).join(", ")}, each explained in plain English. Search, filter, copy. Replace anything in <angle brackets> with your own value.`} seed={121} />
    <div className="kk-page">
    <CheatSheets />
  </div></>;
}
