'use client'

import s from './blog.module.scss';
import {BlogCard, Size,} from '@/components/layouts/blogCard/blogCard';
import {BlogCardFullWidth} from '@/components/layouts/blogCardFullWidth/blogCardFullWidth';
import {FilterButton} from '@/components/ui/buttons/filterButton/filterButton';
import {Category} from '@/components/layouts/caseCircle/caseCircle';
import {useState} from 'react';
import {ArrowButtonWithText} from '@/components/ui/buttons/ArrowButtonWithText/arrowButtonWithText';
import {tempData} from '@/common/componentsData/blog';

export default function Blog() {
    const [currentFilter, setCurrentFilter] = useState<Category>('All projects');
    const buttons: Category[] = ['All projects', 'Web', 'Seo', 'Ads'];
    const filterButtons = buttons.map((button) => {
        return (
            <FilterButton
                key={button}
                value={button}
                active={button === currentFilter}
                onClick={() => setCurrentFilter(button)}
            >
                {button}
            </FilterButton>
        );
    });
    const articles = tempData.map((article, index) => {
        if (index === 0) {
            return <BlogCardFullWidth {...article} key={article.id}/>;
        }

        if (index === 1) {
            return <BlogCard {...article} size={'small'} key={article.id}/>;
        }

        const modIndex = (index - 2) % 4;
        let size;
        if (modIndex === 0 || modIndex === 1) {
            size = 'medium';
        } else {
            size = 'small';
        }

        return <BlogCard {...article} size={size as Size} key={article.id}/>;
    });

    const handleLoadMore = () => {
        //need request new data
    };

    return (
        <div className={s.blogPage}>
            <div className={s.blogPageContent}>
                <div className={s.mainContainer}>
                    <div className={s.header}>
                        <h1>Блог</h1>
                        <div className={s.filterButtons}>{filterButtons}</div>
                    </div>
                    <div className={s.articles}>{articles}</div>
                    <ArrowButtonWithText
                        text={'Загрузить ещё'}
                        className={s.loadMoreButton}
                        onClick={handleLoadMore}
                    />
                </div>
            </div>
        </div>
    );
};
