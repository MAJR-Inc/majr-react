/// <reference types="react" />
interface ButtonProps {
    icon: any;
    onClick: () => void;
    variant?: 'light' | 'dark' | 'main';
    rounded?: boolean;
    disabled?: boolean;
    className?: string;
}
export declare const IconButton: ({ icon, onClick, variant, rounded, disabled, className }: ButtonProps) => JSX.Element;
export {};
