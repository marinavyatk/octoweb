import { ComponentPropsWithoutRef, CSSProperties } from "react";
import { clsx } from "clsx";
import s from "./wordSwipe.module.scss";
import { v4 as uuid } from "uuid";

export type WordSwipeProps = {
  words: string[];
} & ComponentPropsWithoutRef<"div">;

export const WordSwipe = (props: WordSwipeProps) => {
  const { className, ...restProps } = props;
  let { words } = props;
  const classNames = clsx(s.wordSwipe, className);

  if (!words || words.length === 0) return;

  if (words.length === 1) {
    words = [...words, ...words];
  }

  const getCharacters = (word: string) => {
    return word.split("").map((symbol, symbolIndex) => {
      return <span key={uuid()}
                   style={{ animationDelay: `${(word.length - (symbolIndex + 1)) * 0.08}s` }}
      >
        {symbol}</span>;
    });
  };

  const wordsList = words.map((word, index) => {
    return <div key={uuid()} className={clsx(s.word, !index && s.firstWord)}>
      {getCharacters(word)}
    </div>;
  });
  return (
    <div {...restProps} className={classNames} style={{ "--wordsQty": words.length } as CSSProperties}>
      <div className={s.inner}>
        {wordsList}
      </div>
    </div>
  );
};