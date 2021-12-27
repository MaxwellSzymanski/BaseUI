import React from "react";

export interface ButtonProps {
    label: string;
}

const Button = (props: ButtonProps) => {
    return <button className="p-2 bg-gray-400 text-gray-100 border-r-4">{props.label}</button>
}

export default Button;