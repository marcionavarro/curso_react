import * as React from 'react';

export interface Props {
    title: string;
    content: string;
    commentsQty: number;
    tags: string[];
    // 8 - enum
    category: Category
}

export enum Category{
    JS = "JavaScript",
    TS = "TypeScript",
    P = "Php"
}

const Destruturing = ({title, content, commentsQty, tags}: Props) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{content}</p>
            <p>Quantidade de comentários: {commentsQty}</p>
            <div>
                {tags.map((tag) => (
                    <span># {tag}</span>
                ))}
            </div>
        </div>
    );
}

export default Destruturing;