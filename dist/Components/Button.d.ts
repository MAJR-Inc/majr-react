import * as React from 'react';
interface ButtonProps {
    text: string;
    onClick: () => void;
    variant?: 'light' | 'dark' | 'main' | 'highlight' | 'highlightdark' | 'green';
    rounded?: boolean;
    icon?: React.ReactElement;
    iconPosition?: 'right' | 'left';
    className?: string;
    size?: 'small' | 'normal' | 'fillWidth';
    altFont?: boolean;
}
export declare const Button: ({ text, onClick, variant, rounded, icon, iconPosition, className, size, altFont }: ButtonProps) => JSX.Element;
export {};
