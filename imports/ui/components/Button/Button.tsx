import React from "react";

export interface ButtonProps {
    label: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = (props: ButtonProps) => {
    return <button 
        className="px-8 py-2 transition-all bg-blue-500 rounded-full shadow-md hover:shadow-lg text-gray-50 active:bg-blue-700"
        onClick={props.onClick}>
            {props.label}
    </button>
}

export default Button;