import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";
import ConditionalWrapper from "@/components/layout/ConditionalWrapper";
import { organizationSchema, softwareSchema } from "@/lib/seo";

import { Toaster } from "sonner";


const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });
const outfit = Outfit({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: {
    default: "RIMs Software Company | Dairy Cooperative ERP Since 2009",
    template: "%s | RIMs Software Company",
  },
  description:
    "Empowering Dairy & Business Management Solutions Since 2009. Gramiya Paaledu ERP trusted by 4000+ Milk Cooperative Societies across South India.",
  keywords: [
    "Dairy Cooperative ERP",
    "Gramiya Paaledu Software",
    "Aavin software",
    "BMC Units software",
    "Milk Collection Management",
    "Cooperative Audit Software",
    "Tamil Cooperative ERP",
  ],
  authors: [{ name: "RIMs Software Company" }],
  icons: {
    icon: "https://res.cloudinary.com/delk61fp0/image/upload/v1778770217/rims/assets/rims_logo_main.jpg",
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
    <html lang="en" className="overflow-x-hidden">
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
        className={`${plusJakartaSans.variable} ${outfit.variable} font-sans antialiased min-h-screen flex flex-col bg-[#F8FAFC] overflow-x-hidden`}
      >
        <ConditionalWrapper>
          {children}
        </ConditionalWrapper>
        <Toaster position="top-center" richColors />
      </body>


    </html>
  );
}
