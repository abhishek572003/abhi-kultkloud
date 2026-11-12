import Link from "next/link";
import { PageBanner } from "./_components/Kit";

export default function NotFound() {
  return <>
    <PageBanner title="404: lost in the clouds" sub="Kloudy looked everywhere. This page does not exist, or it moved." seed={404}>
      <div className="kk-actions"><Link className="kk-button kk-button-pixel" href="/">Back to the start</Link><Link className="kk-button kk-button-ghost" href="/search">Search instead</Link></div>
    </PageBanner>
  </>;
}
