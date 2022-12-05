/// <reference types="react" />
interface InputProps {
    text: string;
    setText: (text: string) => void;
    variant?: 'light' | 'dark';
    placeholder?: string;
}
export declare const Input: ({ text, setText, variant, placeholder }: InputProps) => JSX.Element;
export {};
