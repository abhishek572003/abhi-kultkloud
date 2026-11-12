import type { Metadata } from "next";
import { PageBanner } from "../_components/Kit";
import { notes } from "../_data/resources";

export const metadata: Metadata = { title: "Study notes", description: "Free downloadable DevOps and Linux study notes." };

export default function ResourcesPage() {
  return <>
    <PageBanner title="Study notes" sub="Free notes to download and keep next to the learning paths." seed={71} />
    <div className="kk-page">
      <ul className="kk-grid kk-grid-2" style={{ marginTop: 40 }}>
        {notes.map(n => <li key={n.href}><a className="kk-pane kk-card" href={n.href} download>
          <span className="kk-card-top"><span className="kk-tag kk-tag-sky">Download</span><span className="kk-chip">{n.size}</span></span>
          <h2 >{n.title}</h2><p>{n.what}</p>
        </a></li>)}
      </ul>
    </div>
  </>;
}
