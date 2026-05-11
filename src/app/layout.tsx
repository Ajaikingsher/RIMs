import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { organizationSchema, softwareSchema } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "RIMs Software Company | Dairy Cooperative ERP Since 1996",
    template: "%s | RIMs Software Company",
  },
  description:
    "Empowering Dairy & Business Management Solutions Since 1996. Gramya Paledu ERP trusted by 4000+ Milk Cooperative Societies across South India.",
  keywords: [
    "Dairy Cooperative ERP",
    "Gramya Paledu Software",
    "Aavin software",
    "BMC Units software",
    "Milk Collection Management",
    "Cooperative Audit Software",
    "Tamil Cooperative ERP",
  ],
  authors: [{ name: "RIMs Software Company" }],
  icons: {
    icon: "/favicon.svg",
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.rimssoftware.com"
  ),
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "RIMs Software Company",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased min-h-screen flex flex-col bg-[#F8FAFC]`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
