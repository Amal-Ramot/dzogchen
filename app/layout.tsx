import type { Metadata, Viewport } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Starfield from "@/components/Starfield";

export const metadata: Metadata = {
  title: { default: "דזוגצ'ן – השלמות הגדולה", template: "%s | דזוגצ'ן" },
  description: "אתר בעברית המרכז את תורת הדזוגצ'ן (רְדזוֹגְס פָּה צֶ'ן פּוֹ) – ההשקפה, השושלת, התרגול והכתבים, מתורגם ממקורות טיבטיים ואנגליים.",
  icons: { icon: `${process.env.NEXT_PUBLIC_BASE_PATH}/favicon.svg` },
};

export const viewport: Viewport = { themeColor: "#04050d" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Assistant:wght@300;400;600;700&family=Frank+Ruhl+Libre:wght@400;500;700&family=Noto+Serif+Tibetan:wght@400;600&display=swap"
        />
      </head>
      <body>
        <Starfield />
        <Nav />
        <main>{children}</main>
        <footer className="footer">
          <div className="tib" lang="bo">སརྦ་མངྒ་ལཾ།</div>
          <p style={{ margin: 0 }}>
            אתר לימודי ללא מטרות רווח. התרגומים לעברית נעשו מתוך מקורות טיבטיים ואנגליים לצורך היכרות בלבד –
            התרגול עצמו נלמד מפי מורה מוסמך.
          </p>
        </footer>
      </body>
    </html>
  );
}
