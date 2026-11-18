import Link from "next/link";
import DzogchenSymbol from "@/components/DzogchenSymbol";
import Reveal from "@/components/Reveal";
import { Tib, Verse } from "@/components/Ui";
import { NAV } from "@/lib/nav";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div>
          <div className="hero-symbol fade-up">
            <DzogchenSymbol />
          </div>
          <div className="tib-title fade-up d1"><Tib>རྫོགས་པ་ཆེན་པོ།</Tib></div>
          <h1 className="fade-up d2">דזוגצ'ן</h1>
          <p className="lead fade-up d3">
            השלמות הגדולה — הטבע הקדמון של התודעה, צלול כמו שמיים ריקים, שלם מאז ומעולם.
            כל תורת הדזוגצ'ן, מתורגמת לעברית ומרוכזת במקום אחד.
          </p>
          <div className="btn-row fade-up d4">
            <Link href="/what-is/" className="btn">התחילו כאן ←</Link>
            <Link href="/glossary/" className="btn ghost">מילון מונחים</Link>
          </div>
        </div>
        <div className="scroll-hint" aria-hidden="true" />
      </section>

      <section>
        <div className="narrow">
          <Reveal>
            <span className="eyebrow">פתח דבר</span>
            <h2>מבט ישיר אל טבע התודעה</h2>
            <p>
              <strong>דזוגצ'ן</strong> (<Tib>རྫོགས་ཆེན།</Tib>, קיצור של <em>דזוגפה צ'נפו</em>, "השלמות הגדולה") היא
              התורה הגבוהה ביותר במסורת הנְיִינְגְמָה של הבודהיזם הטיבטי ובמסורת הבּוֹן. לפי הדזוגצ'ן, טבעה
              האמיתי של התודעה — <strong>ריגפה</strong>, הנוכחות הערה — טהור מאז ומעולם ושלם כפי שהוא. אין צורך לבנות
              אותו, לתקן אותו או להשיג אותו; יש רק לזהות אותו ולהישאר בו.
            </p>
            <p>
              הדרך אינה טרנספורמציה איטית של התודעה אלא <em>היכרות ישירה</em>: המורה מצביע על טבע התודעה, התלמיד
              מזהה אותו בעצמו, ומאז והלאה כל התרגול הוא העמקת הזיהוי הזה עד שהוא מתמיד וחובק הכול.
            </p>
          </Reveal>

          <Verse
            tib={<>ཧོཿ སྣང་སྲིད་འཁོར་འདས་ཐམས་ཅད་ཀུན། །<br />གཞི་གཅིག་ལམ་གཉིས་འབྲས་བུ་གཉིས། །<br />རིག་དང་མ་རིག་ཆོ་འཕྲུལ་ཏེ། །</>}
            translit="ho, nang si khor de tamché kün / zhi chik lam nyi drebu nyi / rik dang marik chotrul té"
            he={<>הו! כל מה שמופיע וכל מה שקיים, סמסרה ונירוונה —<br />בסיס אחד, שתי דרכים, שני פירות:<br />מחזה הקסם של ידיעה ושל אי-ידיעה.</>}
            src="תפילת קונטוזנגפו, מתוך טנטרת גונגפה זנגטל"
          />
        </div>
      </section>

      <section>
        <div className="container">
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <span className="eyebrow">מפת האתר</span>
              <h2>שערים אל המסורת</h2>
            </div>
          </Reveal>
          <div className="grid grid-3">
            {NAV.map((n, i) => (
              <Reveal key={n.href} delay={(i % 3) * 120}>
                <Link href={n.href} className="card" style={{ height: "100%" }}>
                  <Tib>{n.tib}</Tib>
                  <h3>{n.label}</h3>
                  <p>{n.desc}</p>
                  <span className="more">לקריאה ←</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="quote-band">
        <Reveal>
          <div className="tib" lang="bo" style={{ fontSize: "clamp(1.2rem, 2.6vw, 1.7rem)", color: "var(--gold)", marginBottom: 22, lineHeight: 2 }}>
            འཁོར་འདས་རྨི་ལམ་བཟང་ངན་འདྲ། །རང་སྣང་གཞི་མེད་སྟོང་པའི་གཟུགས། །<br />ད་རེས་བླང་དོར་གཉིས་མེད་པས། །རིག་པ་རང་ས་བཟུང་ན་ལེགས། །
          </div>
          <blockquote>
            "סמסרה ונירוונה דומות לחלומות טובים ורעים: הופעות עצמיות, חסרות בסיס, צורות ריקות.
            עכשיו, בלי לקבל ובלי לדחות, טוב לאחוז במקומה של הריגפה עצמה."
          </blockquote>
          <cite>לונגצ'ן רבג'אם, שיר הווג'רה של משלים ומשמעות מוחלטת</cite>
        </Reveal>
      </section>

      <section>
        <div className="narrow">
          <Reveal>
            <h2>על האתר</h2>
            <p>
              בעברית כמעט אין חומר מסודר על הדזוגצ'ן. האתר הזה מרכז את עיקרי התורה — ההשקפה, השושלת, סוגי
              התרגול והכתבים. רוב התוכן מבוסס על ספרות מחקר ותרגומים באנגלית של מורים וחוקרים בני זמננו, ובהם
              תורותיו של צ'וגיאל נמקהאי נורבו. בעמוד <Link href="/tibetan-texts/">הטקסטים הטיבטיים</Link> מובאים טקסטים
              יסודיים בכתב הטיבטי המקורי — פטרול רינפוצ'ה, תפילת קונטוזנגפו ולונגצ'נפה — עם תרגום עברי שורה מול שורה.
              מונחי המפתח מופיעים בכל האתר בכתב הטיבטי, בתעתיק ובעברית.
            </p>
            <p style={{ color: "var(--muted)" }}>
              המסורת עצמה מדגישה שהדזוגצ'ן אינו ידע אינטלקטואלי: הזיהוי של ריגפה עובר ממורה לתלמיד. האתר נועד
              להכרה ולהשראה — לא כתחליף למורה.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
