# דזוגצ'ן – השלמות הגדולה

אתר בעברית המרכז את תורת הדזוגצ'ן (རྫོགས་པ་ཆེན་པོ): ההשקפה, שלוש ההצהרות של גאראב דורג'ה, השושלת, שלוש הסדרות, התרגול, גוף הקשת, הדזוגצ'ן בבון, מורים, כתבים, מילון מונחים ומקורות.
התוכן מתורגם ומרוכז ממקורות טיבטיים (עם ציטוטים בכתב טיבטי) וממקורות באנגלית.

## טכנולוגיה
- Next.js 15 (App Router, static export) + React 19 + TypeScript
- עיצוב RTL, סמל דזוגצ'ן מונפש ב-SVG, רקע כוכבים ב-Canvas
- פריסה אוטומטית ל-GitHub Pages דרך GitHub Actions (`.github/workflows/deploy.yml`)

## פיתוח מקומי
```bash
npm install
npm run dev
```

## פריסה
ב-GitHub: Settings → Pages → Source: **GitHub Actions**. כל push מפעיל בנייה ופריסה.
