"use client";

import { roboto, jakartaSans, poppins } from "./ui/fonts";
import "@/app/globals.css";
// import ToastProvider from "./ui/common/react-toastify";
import { AuthProvider } from "./lib/userContext";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${roboto.variable} ${jakartaSans.variable} ${poppins.variable}`}
            >
                    <AuthProvider>
                        {children}
                    </AuthProvider>
            </body>
        </html>
    );
}
