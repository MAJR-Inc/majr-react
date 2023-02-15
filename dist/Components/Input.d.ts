/// <reference types="react" />
interface InputProps {
    value: string;
    onChange: (value: string) => void;
    variant?: 'light' | 'dark' | 'password' | 'passwordDark' | 'search' | 'searchDark';
    placeholder?: string;
    disabled?: boolean;
    className?: string;
    size?: 'default' | 'fill';
}
export declare const Input: ({ value, onChange, variant, placeholder, disabled, className, size }: InputProps) => JSX.Element;
export {};
