import React, {ComponentPropsWithoutRef, useRef, useState} from 'react';
import clsx from 'clsx';
import s from './teamMembersCards.module.scss';
import {TeamMember, TeamMemberCard} from '../../primitive/teamMemberCard/teamMemberCard.tsx';
import {ArrowNavigationButton} from '../../primitive/arrowNavigationButton/arrowNavigationButton.tsx';

export type TeamMemberCardsProps = {
    teamMembers: TeamMember[]
} & ComponentPropsWithoutRef<'div'>;

export const TeamMemberCards = (props: TeamMemberCardsProps) => {
    //need to fix

    const {teamMembers, className, ...restProps} = props;
    const containerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState<number | null>(null);
    const [scrollLeft, setScrollLeft] = useState<number | null>(null);
    const [currentCard, setCurrentCard] = useState(0);

    const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        setIsDragging(true);
        setStartX(event.pageX - containerRef.current.offsetLeft);
        setScrollLeft(containerRef.current.scrollLeft);
    };

    const handleMouseMove = (event: MouseEvent) => {
        if (!isDragging || !startX || scrollLeft === null) return;
        const x = event.pageX - containerRef.current!.offsetLeft;
        const walk = (x - startX) * 1.5;
        containerRef.current!.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    React.useEffect(() => {
        if (isDragging) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        } else {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        }

        scrollContainer();
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging, startX, scrollLeft, currentCard]);

    const classNames = clsx(s.teamBlock, className);
    const teamMemberList = teamMembers.map((member) => {
        return <TeamMemberCard workExperience={member.workExperience}
                               name={member.name}
                               specialization={member.specialization}
                               description={member.description}
                               img={member.img}
                               key={member.specialization}
                               className={s.cardItem}
        />;
    });

    //carousel
    const cardsOnPage = 3;
    const handlePreviousClick = () => {
        const previous = currentCard - 1
        setCurrentCard((previous < 0) ? teamMembers.length - 1 : (teamMembers.length - previous <= 4) ? teamMembers.length - (cardsOnPage + 1) : previous)
    }

    const handleNextClick = () => {
        const next = currentCard + 1;
        setCurrentCard((next === teamMembers.length - (cardsOnPage - 1) || next > teamMembers.length - 1 ? 0 : next))
    }

    const scrollContainer = () => {
        if (containerRef.current) {
            containerRef.current.children[currentCard]
                .scrollIntoView({
                    inline: 'start',
                    block: 'nearest',
                    behavior: 'smooth'
                });
        }
    };

    const style = {
        marginLeft: currentCard !== 0 ? '0' : undefined
    };

    return (
        <div className={classNames} id={'team'}>
            <div className={s.header}>
                <h2>КОМАНДА</h2>
                <div className={s.buttons}>
                    <ArrowNavigationButton variant={'previous'} onClick={handlePreviousClick}/>
                    <ArrowNavigationButton variant={'next'} onClick={handleNextClick}/>
                </div>
            </div>

            <div
                {...restProps}
                className={s.cards}
                ref={containerRef}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                style={style}
            >
                {teamMemberList}
            </div>
        </div>

    );
};