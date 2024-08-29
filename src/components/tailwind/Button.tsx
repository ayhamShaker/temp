import React, { FC, ReactNode } from 'react'
import { TColor } from '@/types';

interface IButton {
    color: TColor;
    children: ReactNode;
    className?: string;
    isDisable?: boolean;
    onClick?(...args: unknown[]): unknown;
}

const Button: FC<IButton> = ({
    color,
    children,
    isDisable,
    onClick
}) => {

    const colors = {
        blue: "bg-blue-500 hover:bg-blue-700",
        red: "bg-red-500 hover:bg-red-700",
        sky: "bg-sky-500 hover:bg-sky-700",
        cyan: "bg-cyan-500 hover:bg-cyan-700"
    };
    
    return (
        <button
            className={`${colors[color] || colors["blue"]} font-bold py-2 px-4 rounded`}
            onClick={onClick}>
            {children}
        </button>
    )
}

export default Button