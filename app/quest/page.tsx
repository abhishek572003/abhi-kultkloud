import type { Metadata } from "next";
import { PageBanner } from "../_components/Kit";
import QuestLog from "./QuestLog";

export const metadata: Metadata = { title: "Your quest log", description: "Your KultKloud level, XP, streak, goal and badges." };

export default function QuestPage() {
  return <>
    <PageBanner title="Your quest log" sub="Every module, certification step, project step and tool you try earns XP. Level up from Localhost to Kloud Legend." seed={101} />
    <div className="kk-page"><QuestLog /></div>
  </>;
}
