import type { Metadata } from "next";
import { roboto, jakartaSans, poppins } from "./ui/fonts";
import "@/app/globals.css";
import ToastProvider from "./ui/common/react-toastify";


export const metadata: Metadata = {
  title: "Ques.AI",
  description: "AI assistant for podcasts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${jakartaSans.variable} ${poppins.variable}`}>
        <ToastProvider>
          {children}
        </ToastProvider>
        </body>
    </html>
  );
}
