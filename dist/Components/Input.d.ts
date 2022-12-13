/// <reference types="react" />
interface InputProps {
    value: string;
    onChange: (value: string) => void;
    variant?: 'light' | 'dark' | 'password' | 'passwordDark' | 'search' | 'searchDark';
    placeholder?: string;
}
export declare const Input: ({ value, onChange, variant, placeholder }: InputProps) => JSX.Element;
export {};
