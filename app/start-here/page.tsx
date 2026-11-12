import type { Metadata } from "next";
import { PageBanner } from "../_components/Kit";
import ClassPicker from "./ClassPicker";

export const metadata: Metadata = { title: "Start here: choose your class", description: "Answer three questions and get a personal Cloud or DevOps career quest: what to learn first, which certification to take and which project to build." };

export default function StartHerePage() {
  return <>
    <PageBanner title="Choose your class" sub="Three quick questions. You get a job to aim for, the first path to learn, the first certification to take and the first project to build. Change your answers any time." seed={51} />
    <div className="kk-page"><ClassPicker /></div>
  </>;
}
