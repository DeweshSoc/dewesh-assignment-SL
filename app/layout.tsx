import type { Metadata } from "next";
import { roboto, circular_std, poppins } from "./ui/fonts";

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
      <body className={`${roboto.variable} ${circular_std.variable} ${poppins.variable}`}>{children}</body>
    </html>
  );
}
