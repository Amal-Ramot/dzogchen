import type { Metadata } from "next";
import GlossaryList from "@/components/GlossaryList";
import { PageHeader, PageNav } from "@/components/Ui";

export const metadata: Metadata = { title: "מילון מונחים" };

export default function Page() {
  return (
    <>
      <PageHeader eyebrow="מילון" tib="ཚིག་མཛོད།" title="מילון מונחים" lead="המונחים המרכזיים של הדזוגצ'ן — בכתב טיבטי, בתעתיק ויילי, בסנסקריט ובעברית." />
      <div className="narrow" style={{ paddingBottom: 80 }}>
        <GlossaryList />
        <PageNav current="/glossary/" />
      </div>
    </>
  );
}
