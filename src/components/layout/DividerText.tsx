import React from "react";

interface iDividerText extends React.HtmlHTMLAttributes<HTMLDivElement> { title?: string, isTitle?: boolean }

export default function DividerText({ title = "or", isTitle = false, className }: iDividerText) {
    return (
        <div className={`relative flex items-center ${className}`}>
            <div className="flex-grow border-t border-border" />
            <span className={`flex-shrink mx-4  ${isTitle ? "font-semibold text-primary text-lg" : "text-gray-400"} `}>{title}</span>
            <div className="flex-grow border-t border-border" />
        </div>
    )
}
