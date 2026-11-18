import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { Callout, PageHeader, PageNav, Tib } from "@/components/Ui";

export const metadata: Metadata = { title: "מקורות" };

const tibetan = [
  ["མཁས་པ་ཤྲཱི་རྒྱལ་པོའི་ཁྱད་ཆོས", "פטרול רינפוצ'ה, פירוש שלוש ההצהרות", "מתורגם במלואו — עמוד הטקסטים הטיבטיים"],
  ["ཀུན་ཏུ་བཟང་པོའི་སྨོན་ལམ", "תפילת קונטוזנגפו (מתוך טנטרת גונגפה זנגטל)", "החלק הראשון מתורגם — עמוד הטקסטים הטיבטיים"],
  ["དཔེ་དོན་ངེས་དོན་རྡོ་རྗེའི་མགུར", "לונגצ'נפה, שיר הווג'רה של משלים ומשמעות", "מבחר בתים מתורגם — עמוד הטקסטים הטיבטיים"],
  ["ཀུན་བྱེད་རྒྱལ་པོ", "קונג'ה גיאלפו — טנטרת השורש של סמדה", "עמודי שלוש הסדרות והכתבים"],
  ["ཀུན་བཟང་བླ་མའི་ཞལ་ལུང", "פטרול רינפוצ'ה, מילותיו של מורי המושלם", "עמוד התרגול"],
  ["མཛོད་བདུན", "לונגצ'נפה, שבעת האוצרות", "עמודי ההשקפה והתרגול"],
  ["ཡེ་ཤེས་བླ་མ", "ג'יגמה לינגפה, ישה לאמה", "עמוד התרגול (טרקצ'ו, טוגל, ארבעת החזונות)"],
];

const books: [string, string][] = [
  ["Chögyal Namkhai Norbu — The Crystal and the Way of Light", "מבוא קלאסי לדזוגצ'ן מאת מורה שהביא אותו למערב."],
  ["Chögyal Namkhai Norbu — Dzogchen: The Self-Perfected State", "הסבר בהיר של הבסיס, הדרך והפרי."],
  ["Namkhai Norbu & Adriano Clemente — The Supreme Source", "תרגום ופירוש של קונג'ה גיאלפו, טנטרת השורש של סמדה."],
  ["Patrul Rinpoche — The Words of My Perfect Teacher", "תרגום קבוצת פדמקרה למדריך הנגונדרו הקלאסי."],
  ["Longchen Rabjam — The Precious Treasury of the Basic Space of Phenomena", "תרגום ריצ'רד בארון לצ'וייינג דזו."],
  ["Dudjom Rinpoche — The Nyingma School of Tibetan Buddhism", "ההיסטוריה והיסודות של אסכולת הנייינגמה."],
  ["Nyoshul Khenpo — A Marvelous Garland of Rare Gems", "תולדות מורי שושלת הדזוגצ'ן."],
  ["John Myrdhin Reynolds — The Golden Letters", "תרגום ופירוש של שלוש ההצהרות של גאראב דורג'ה."],
  ["Tulku Urgyen Rinpoche — As It Is (I–II)", "הוראות ההיכרות הישירות של טולקו אורגיין."],
  ["Tenzin Wangyal Rinpoche — Wonders of the Natural Mind", "הדזוגצ'ן במסורת הבון."],
  ["Sam van Schaik — Approaching the Great Perfection", "מחקר אקדמי על הלונגצ'ן ניינגטיג של ג'יגמה לינגפה."],
  ["Francis V. Tiso — Rainbow Body and Resurrection", "מחקר על תופעת גוף הקשת בעת החדשה."],
];

const sites: [string, string, string][] = [
  ["Lotsawa House", "https://www.lotsawahouse.org", "ספריית טקסטים טיבטיים עם תרגומים מקבילים — מקור עיקרי לציטוטים בטיבטית."],
  ["BDRC — Buddhist Digital Resource Center", "https://www.bdrc.io", "הארכיון הדיגיטלי הגדול של כתבי יד ודפוסים טיבטיים."],
  ["The Treasury of Lives", "https://treasuryoflives.org", "אנציקלופדיה ביוגרפית של מורי טיבט."],
  ["Rigpa Wiki", "https://www.rigpawiki.org", "אנציקלופדיה של מונחים ומושגים בבודהיזם הטיבטי."],
  ["International Dzogchen Community", "https://dzogchen.net", "הקהילה שייסד צ'וגיאל נמקהאי נורבו."],
  ["Ligmincha International", "https://ligmincha.org", "המכון של טנזין וואנגיאל רינפוצ'ה למסורת הבון."],
];

export default function Page() {
  return (
    <>
      <PageHeader eyebrow="ביבליוגרפיה" tib="ཁུངས།" title="מקורות והמלצות קריאה" lead="האתר מבוסס על הטקסטים הטיבטיים עצמם ועל תרגומים ומחקרים באנגלית. כאן תמצאו אותם, וגם את הדרך להמשיך ללמוד." />
      <article className="narrow prose">
        <Reveal>
          <h2>מקורות טיבטיים</h2>
          <p>
            רוב תוכן האתר מבוסס על ספרות מחקר ותרגומים באנגלית (ראו הרשימה למטה). הטקסטים הטיבטיים שבטבלה מובאים
            באתר בכתב המקורי, כפי שהם מופיעים ב-Lotsawa House. שלושת הראשונים בטבלה — וגם שיר הווג'רה של לונגצ'נפה —
            מתורגמים במלואם או בחלקם, מהטיבטית לעברית, בעמוד הטקסטים הטיבטיים. שאר הטקסטים מוזכרים באתר על סמך
            מחקר ותרגומים באנגלית.
          </p>
        </Reveal>
        <Reveal className="table-wrap">
          <table className="terms">
            <thead><tr><th>טיבטית</th><th>החיבור</th><th>שימוש באתר</th></tr></thead>
            <tbody>
              {tibetan.map((t) => (
                <tr key={t[0]}><td><Tib>{t[0]}</Tib></td><td>{t[1]}</td><td style={{ color: "var(--muted)" }}>{t[2]}</td></tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        <Reveal>
          <h2>ספרים באנגלית</h2>
          <ul>
            {books.map(([b, d]) => (
              <li key={b}><span dir="ltr" style={{ color: "#fff" }}>{b}</span> — <span style={{ color: "var(--muted)" }}>{d}</span></li>
            ))}
          </ul>
        </Reveal>

        <Reveal>
          <h2>אתרים</h2>
          <ul>
            {sites.map(([n, u, d]) => (
              <li key={u}><a href={u} target="_blank" rel="noopener noreferrer" dir="ltr">{n}</a> — <span style={{ color: "var(--muted)" }}>{d}</span></li>
            ))}
          </ul>
        </Reveal>

        <Callout>
          <strong>איך ממשיכים?</strong> הדזוגצ'ן נלמד ממורה. כמעט כל המורים המוזכרים באתר — או תלמידיהם וממשיכיהם —
          מלמדים כיום גם באופן מקוון. כדאי לחפש מורה ששושלתו ברורה ושההדרכה שלו מעשית, ולגשת ללימוד בסבלנות ובפתיחות.
        </Callout>

        <PageNav current="/sources/" />
      </article>
    </>
  );
}
