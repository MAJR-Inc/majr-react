/// <reference types="react" />
interface ButtonProps {
    text: string;
    onClick: () => void;
    variant?: 'light' | 'dark' | 'main' | 'highlight' | 'highlightdark';
    rounded?: boolean;
}
export declare const Button: ({ text, onClick, variant, rounded }: ButtonProps) => JSX.Element;
export {};
