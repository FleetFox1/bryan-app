import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import Sidebar from "@/app/components/Sidebar";
import Footer from "@/app/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Bryan Blankenburg - How I See It",
    description: "Notes from a builder between systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0f0d15] text-[f5f5f5] antialiased min-h-screen flex flex-col`}
      >
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 px-8 md:p-12">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
