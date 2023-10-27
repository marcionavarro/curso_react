import { ChangeEvent, useState } from "react";


export interface Props {
}

const State = (props: Props) => {
    const [text, setText] = useState<string | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }

    return (
        <div>
            <div>
                <p>O texto é: {text}</p>
                <input type="text" onChange={handleChange} />
            </div>
        </div>
    );
}

export default State;
