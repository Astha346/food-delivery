import "./globals.css";
import TopNavbar from "@/components/navbar/TopNavbar";
import Toast from "@/components/Toast";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">

        <TopNavbar />

        <main className="p-4">{children}</main>

        {/* GLOBAL TOAST */}
        <Toast />

      </body>
    </html>
  );
}