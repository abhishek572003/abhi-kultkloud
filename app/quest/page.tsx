import type { Metadata } from "next";
import QuestLog from "./QuestLog";

export const metadata: Metadata = { title: "Your quest log", description: "Your KultKloud level, XP, streak and badges." };

export default function QuestPage() {
  return <main className="kk-page">
    <header className="kk-page-head"><h1>Your quest log.</h1><p>Every route stop, certification step and tool you try earns XP. Level up from Localhost to Kloud Legend.</p></header>
    <QuestLog />
  </main>;
}
