import { PillarPageView } from "@/components/PillarPageView";
import { pillarMetadata } from "@/lib/seo";

export const metadata = pillarMetadata("es");

export default function SpanishDarkPatternsPage() {
  return <PillarPageView locale="es" />;
}
