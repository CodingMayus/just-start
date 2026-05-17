import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import React from "react";
import "./globals.css";
const geistSans = Geist ({variable: "--font-geist-sans",
                          subsets: ["latin"],
})

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});
export const metadata: Metadata = {
    title: "Ragebait",
    description: "ragebait employers, friends, teachers, everyone. ermmm... orrrr store all your job applications in one place.  Helping you create cover-letters, keeping everything in one place instead of putting everything in a google sheets"
}
export default function({
    children,
}: Readonly<{
    children: React.ReactNode}>){

return(
<html lang = "en"  >
<body className = {`${geistSans.variable} ${geistMono.variable} antialiased`  } >

{children}
</body>
</html>
);
}