import type { Metadata } from "next";
import LiveFeed, { LiveStamp } from "../_components/LiveFeed";
import { getFeed, SOURCES } from "../_lib/feeds";

export const revalidate = 21600; // 6 hours

export const metadata: Metadata = {
  title: "Live updates",
  description: "New Cloud, DevOps and Kubernetes videos and announcements, collected automatically from official blogs and trusted channels every 6 hours.",
};

export default async function UpdatesPage() {
  const feed = await getFeed();
  return <main className="kk-page">
    <header className="kk-page-head">
      <h1>Live updates.</h1>
      <p>KultKloud keeps itself fresh. Every 6 hours it checks official blogs and trusted YouTube channels for new videos and announcements, and this page updates on its own. No one has to remember to do it.</p>
      <LiveStamp fetchedAt={feed.fetchedAt} sourcesOk={feed.sourcesOk} total={SOURCES.length} />
      <ul className="kk-sources" aria-label="Sources">{SOURCES.map(s => <li key={s.name}>{s.name}</li>)}</ul>
    </header>
    <LiveFeed items={feed.items} />
  </main>;
}
