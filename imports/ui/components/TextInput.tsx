import React from "react";

interface Props {
    text: string
}

export const TextInput: React.FC<Props> = () => {
    return (
        <div>
            <input className="focus:bg-gray-50"/>
        </div>
    );
}