import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const dmSans = localFont({
  src: [
    {
      path: './fonts/DM_Sans/DMSans-VariableFont_opsz,wght.ttf',
      style: 'normal',
      weight: '100 900',  // Range for variable font weights
    },
    {
      path: './fonts/DM_Sans/DMSans-Italic-VariableFont_opsz,wght.ttf',
      style: 'italic',
      weight: '100 900',  // Italic weights for variable font
    },
  ],
  variable: '--font-dm-sans', // CSS variable to use for this font
});

export const metadata: Metadata = {
  title: "Bento Grid",
  description: "Bento Grid Challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
