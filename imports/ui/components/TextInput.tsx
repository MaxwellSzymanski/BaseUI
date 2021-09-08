import React from "react";

interface Props {
    text: string
}

export const TextInput: React.FC<Props> = () => {
    return (
        <div>
            <input className="bg-gray-100 focus:bg-gray-50 border-l-8 pl-4" placeholder="type"/>
        </div>
    );
}