/// <reference types="react" />
interface ButtonProps {
    icon: any;
    onClick: () => void;
    variant?: 'light' | 'dark' | 'main';
    rounded?: boolean;
}
export declare const IconButton: ({ icon, onClick, variant, rounded }: ButtonProps) => JSX.Element;
export {};
