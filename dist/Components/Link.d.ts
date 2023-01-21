/// <reference types="react" />
interface ButtonProps {
    text: string;
    link: string;
    variant?: 'light' | 'dark' | 'animated';
    disabled?: boolean;
    className?: string;
}
export declare const Link: ({ text, link, variant, className, disabled }: ButtonProps) => JSX.Element;
export {};
