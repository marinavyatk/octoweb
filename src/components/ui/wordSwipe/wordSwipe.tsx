"use client";

import {ComponentPropsWithoutRef, useEffect, useMemo, useRef, useState} from "react";
import {clsx} from "clsx";
import s from "./wordSwipe.module.scss";

export type WordSwipeProps = {
    words: string[];
} & ComponentPropsWithoutRef<"div">;

export const WordSwipe = (props: WordSwipeProps) => {
    const {className, words, ...restProps} = props;
    const classNames = clsx(s.wordSwipe, className);
    const [wordIndex, setWordIndex] = useState<number | null>(null);
    const [wordsForAnimation, setWordsForAnimation] = useState<string[]>([]);
    const memoWords = useMemo(() => (words), [words])
    const longestWord = useMemo(() => {
        return words.length ? [...words].sort((a, b) => b.length - a.length)[0] : "";
    }, [memoWords]);

    useEffect(() => {
        if (!words || words.length < 1) return;

        if (words.length === 1) {
            setWordsForAnimation([words[0], words[0]]);
        } else {
            setWordsForAnimation(words);
        }

        setWordIndex(0);

        const interval = setInterval(() => {
            setWordIndex((prev) => (prev! + 1) % words.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [words]);

    return (
        <div {...restProps} className={classNames}>
            <div className={s.inner}>
                <div
                    className={s.words}
                >
                    <Word word={wordIndex !== null ? wordsForAnimation[wordIndex] : null}/>
                    <div className={clsx(s.word, s.placeholder)}>{longestWord.split("").map((char, charIndex) => (
                        <span key={charIndex}>{char}</span>
                    ))}</div>
                </div>
            </div>
        </div>
    );
};

type WordProps = {
    word: string | null;
}

const Word = (props: WordProps) => {
    const {word} = props;
    const wordRef = useRef<HTMLDivElement | null>(null);

    if (!word) return null;

    return <div className={s.word} ref={wordRef} key={word}>
        {word.split("").map((char, charIndex) => (
            <span key={charIndex} style={{animationDelay: `${charIndex * 0.08}s`}} className={s.charAnimate}>
                  {char}
      </span>
        ))}
    </div>;
};