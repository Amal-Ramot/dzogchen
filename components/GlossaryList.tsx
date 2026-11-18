"use client";
import { useMemo, useState } from "react";
import { GLOSSARY } from "@/lib/glossary";

export default function GlossaryList() {
  const [q, setQ] = useState("");
  const items = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return GLOSSARY;
    return GLOSSARY.filter((t) => [t.he, t.tib, t.wy, t.skt ?? "", t.def].some((f) => f.toLowerCase().includes(s)));
  }, [q]);

  return (
    <div>
      <input className="search" type="search" placeholder="חיפוש בעברית, בטיבטית או בתעתיק…" value={q} onChange={(e) => setQ(e.target.value)} aria-label="חיפוש מונח" />
      <p style={{ color: "var(--muted)", fontSize: ".95rem" }}>{items.length} מונחים</p>
      {items.map((t) => (
        <div className="gloss-item" key={t.wy}>
          <div className="gloss-head">
            <h3>{t.he}</h3>
            <span className="tib" lang="bo">{t.tib}</span>
            <span className="wylie">{t.wy}{t.skt ? ` · skt. ${t.skt}` : ""}</span>
          </div>
          <p>{t.def}</p>
        </div>
      ))}
      {items.length === 0 && <p style={{ color: "var(--muted)" }}>לא נמצאו מונחים תואמים.</p>}
    </div>
  );
}
