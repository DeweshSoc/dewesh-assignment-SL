"use client";

import { roboto, jakartaSans, poppins } from "./ui/fonts";
import "@/app/globals.css";
import ToastProvider from "./ui/common/react-toastify";
import { AuthProvider } from "./lib/userContext";
import { ProjectProvider } from "./lib/projectContext";

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
                <ToastProvider>
                    <AuthProvider>
                        <ProjectProvider>{children}</ProjectProvider>
                    </AuthProvider>
                </ToastProvider>
            </body>
        </html>
    );
}
