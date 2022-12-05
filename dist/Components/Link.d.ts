/// <reference types="react" />
interface ButtonProps {
    text: string;
    link: string;
    variant?: 'light' | 'dark' | 'animated';
}
export declare const Link: ({ text, link, variant }: ButtonProps) => JSX.Element;
export {};
