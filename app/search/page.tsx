import type { Metadata } from "next";
import SearchClient from "./SearchClient";
export const metadata: Metadata = { title: "Search", description: "Search the Abhishek Tiwari cloud and DevOps learning library." };
export default function SearchPage(){return <div className="platform-page search-page"><div className="page-kicker">SEARCH / ⌘ K</div><h1 className="page-title">Find your next idea.</h1><p className="page-lede">Search the growing library of guides, labs, projects, notes, and architecture patterns.</p><SearchClient/></div>;}
