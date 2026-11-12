import type { Metadata } from "next";
import LiveFeed, { LiveStamp } from "../_components/LiveFeed";
import { PageBanner } from "../_components/Kit";
import { getFeed, SOURCES } from "../_lib/feeds";

export const revalidate = 21600;

export const metadata: Metadata = {
  title: "Daily updates",
  description: "What changed in Cloud, DevOps and Kubernetes today: new free videos and official announcements, collected every day so you stay current.",
};

export default async function UpdatesPage() {
  const feed = await getFeed();
  return <>
    <PageBanner title="Daily updates" sub="Cloud moves every day, so we do too. Each day we collect new free videos from trusted teachers and announcements from the official AWS, Kubernetes, CNCF and HashiCorp channels, so you always learn what is current." seed={91}>
      <LiveStamp fetchedAt={feed.fetchedAt} sourcesOk={feed.sourcesOk} total={SOURCES.length} />
      <ul className="kk-sources" aria-label="Sources">{SOURCES.map(s => <li key={s.name}>{s.name}</li>)}</ul>
    </PageBanner>
    <div className="kk-page">
      <div className="kk-pane kk-feed-wrap"><LiveFeed items={feed.items} /></div>
      <p className="kk-disclaimer">Every week we also re-check exam facts and every resource link across the site, and replace anything that broke or went out of date.</p>
    </div>
  </>;
}
