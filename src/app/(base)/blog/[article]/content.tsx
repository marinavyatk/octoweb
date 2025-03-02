"use client"

import {useEffect} from "react";
import s from './article.module.scss'

type ArticleContentProps = {
    content: string,
}

export const ArticleContent = (props: ArticleContentProps)=> {
    useEffect(() => {
            const tables = document.querySelectorAll("table");
            tables.forEach((table) => {
                if (!table.parentElement?.classList.contains(s.tableWrapper)) {
                    const wrapper = document.createElement("div");
                    wrapper.classList.add(s.tableWrapper);
                    table.parentNode?.insertBefore(wrapper, table);
                    wrapper.appendChild(table);
                }
            });
    }, []);

    const {content} = props
    return <div dangerouslySetInnerHTML={{__html: content}}></div>
}