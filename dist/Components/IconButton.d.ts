/// <reference types="react" />
interface ButtonProps {
    icon: any;
    onClick: () => void;
    variant?: 'light' | 'dark' | 'main';
    rounded?: boolean;
    disabled?: boolean;
}
export declare const IconButton: ({ icon, onClick, variant, rounded, disabled }: ButtonProps) => JSX.Element;
export {};
