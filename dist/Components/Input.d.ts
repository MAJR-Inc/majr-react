/// <reference types="react" />
interface InputProps {
    text: string;
    setText: (text: string) => void;
    variant?: 'light' | 'dark' | 'password' | 'passwordDark' | 'search' | 'searchDark';
    placeholder?: string;
}
export declare const Input: ({ text, setText, variant, placeholder }: InputProps) => JSX.Element;
export {};
