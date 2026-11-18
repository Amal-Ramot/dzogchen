import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { Callout, PageHeader, PageNav, Tib } from "@/components/Ui";
import { TEXTS } from "@/lib/tibetan-texts";

export const metadata: Metadata = { title: "טקסטים טיבטיים — מקור ותרגום" };

export default function Page() {
  return (
    <>
      <PageHeader eyebrow="מקור ותרגום" tib="དཔེ་ཆ།" title="טקסטים טיבטיים" lead="טקסטים יסודיים של הדזוגצ'ן בכתב הטיבטי המקורי, עם תרגום עברי שורה מול שורה." />
      <div className="container" style={{ paddingBottom: 80 }}>
        <div className="narrow">
          <Callout>
            <strong>על התרגום:</strong> הטקסט הטיבטי הועתק מספריית Lotsawa House, שם מצוינת המהדורה הטיבטית שממנה הוא
            נלקח. התרגום לעברית נעשה מהטיבטית, בהשוואה לתרגום האנגלי שמצוין ליד כל טקסט. זהו תרגום ראשוני, שטרם
            נבדק בידי מתרגם או מורה בקיא בטיבטית — הערות ותיקונים יתקבלו בברכה.
          </Callout>
          <Reveal>
            <ul className="toc">
              {TEXTS.map((t) => (
                <li key={t.id}><a href={`#${t.id}`}>{t.title}</a> <span>— {t.author}</span></li>
              ))}
            </ul>
          </Reveal>
        </div>

        {TEXTS.map((t) => (
          <section key={t.id} id={t.id} className="src-text">
            <Reveal className="src-head">
              <Tib className="src-tib-title">{t.tibTitle}</Tib>
              <h2>{t.title}</h2>
              <div className="src-author">{t.author}</div>
              <p className="src-intro">{t.intro}</p>
            </Reveal>

            {t.sections.map((s, i) => (
              <Reveal key={i} className="stanza">
                {s.title && <h3>{s.title}</h3>}
                {s.lines.map(([tib, he], j) => (
                  <div className="biline" key={j}>
                    <span className="he">{he}</span>
                    <span className="tib" lang="bo">{tib}</span>
                  </div>
                ))}
              </Reveal>
            ))}

            <Reveal className="src-foot">
              {t.partial && <p>{t.partial}</p>}
              <p>
                מקור: <a href={t.source.url} target="_blank" rel="noopener noreferrer">{t.source.label}</a>
                {" · "}מהדורה טיבטית: <span className="wylie">{t.source.edition}</span>
                {" · "}תרגום אנגלי להשוואה: <span dir="ltr">{t.source.english}</span>
              </p>
            </Reveal>
          </section>
        ))}

        <div className="narrow"><PageNav current="/tibetan-texts/" /></div>
      </div>
    </>
  );
}
