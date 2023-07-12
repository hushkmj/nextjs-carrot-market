import Link from "next/link";
import React from "react";

interface FloatingButton {
    children: React.ReactNode;
    href: string;
}

export default function FloatingButton({ children, href }: FloatingButton) {
    return (
        <Link legacyBehavior href={href}>
            <a className="fixed bottom-20 right-4 bg-orange-400 rounded-full p-4 text-white shadow-xl hover:bg-orange-500 cursor-pointer transition-colors">
                {children}
            </a>
        </Link>
    );
}