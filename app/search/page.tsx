import type { Metadata } from "next";
import { PageBanner } from "../_components/Kit";
import SearchClient from "./SearchClient";

export const metadata: Metadata = { title: "Search", description: "Search careers, learning paths, certifications, projects and tools." };

export default function SearchPage() {
  return <>
    <PageBanner title="Search" sub="Careers, learning paths, certifications, projects and tools. Press ⌘K or Ctrl+K anywhere on this page." seed={81} />
    <div className="kk-page"><SearchClient /></div>
  </>;
}
