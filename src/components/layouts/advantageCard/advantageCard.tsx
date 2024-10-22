import {ComponentPropsWithoutRef} from 'react';
import {clsx} from 'clsx';
import s from './advantageCard.module.scss';
import Image from 'next/image';

export type AdvantagesCardProps = {
  icon: string;
  header: string;
  paragraph: string;
} & ComponentPropsWithoutRef<"div">;
export const AdvantageCard = (props: AdvantagesCardProps) => {
  const { icon, header, paragraph, className, ...restProps } = props;

  const classNames = clsx(s.card, className);
  return (
    <div className={classNames} {...restProps}>
      <figure>
        <div className={s.imgContainer}>
            <Image src={icon} alt='' fill sizes={'max-width: (767px) 67px, max-width: (1425px) 160px, 130px'}/>
        </div>
        <figcaption>{header}</figcaption>
      </figure>
      <p>{paragraph}</p>
    </div>
  );
};
