import { PillarPageView } from "@/components/PillarPageView";
import { pillarMetadata } from "@/lib/seo";

export const metadata = pillarMetadata("en");

export default function DarkPatternsPage() {
  return <PillarPageView locale="en" />;
}
