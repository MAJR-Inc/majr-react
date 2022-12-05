/// <reference types="react" />
interface ButtonProps {
    icon: any;
    text: string;
    onClick: () => void;
    variant?: 'light' | 'dark' | 'active' | 'activeDark';
    rounded?: boolean;
}
export declare const NavbarBtn: ({ icon, text, onClick, variant, rounded }: ButtonProps) => JSX.Element;
export {};
