'use client';

import {useRouter} from 'next/navigation';
import {useEffect, useRef, useState} from 'react';
import {Warning} from './warning';

type PreventNavigationProps = {
    isDirty: boolean;
};

export const PreventNavigation = ({isDirty}: PreventNavigationProps) => {
    const router = useRouter();
    const [open, setOpen] = useState(false);

    const confirmationFn = useRef<() => void>(() => {
    });
    useEffect(() => {
        window.history.pushState(null, document.title, window.location.href);
    }, []);


    const handleClick = (event: MouseEvent) => {
        const target = event.target as HTMLAnchorElement;
        if (isDirty) {
            event.preventDefault();
            confirmationFn.current = () => {
                router.push(target.href);
            };

            setOpen(true);
        }
    };
    useEffect(() => {

        const handlePopState = () => {
            if (isDirty) {
                window.history.pushState(null, document.title, window.location.href);

                confirmationFn.current = () => {
                    window.history.back()
                };

                setOpen(true);
            } else {
                window.history.back();
            }
        };

        const handleBeforeUnload = (e: BeforeUnloadEvent) => {
            if (isDirty) {
                e.preventDefault();
                e.returnValue = true;
            }
        };
        document.querySelectorAll('a').forEach((link) => {
            if(!link.className.includes('briefNavigationLink')) {
                link.addEventListener('click', handleClick);
            }
        });
        window.addEventListener('popstate', handlePopState);
        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            document.querySelectorAll('a').forEach((link) => {
                link.removeEventListener('click', handleClick);
            });
            window.removeEventListener('popstate', handlePopState);
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isDirty]);

    const confirm = ()=>{
        confirmationFn.current();
        setOpen(false);

        confirmationFn.current = () => {
        };
    }
    const cancel = ()=>{
        setOpen(false);
        confirmationFn.current = () => {
        };
    }

    return (
        <>
            {open &&
                <Warning
                    onCancelButtonClick={cancel}
                    onConfirmButtonClick={confirm}
                />
            }
        </>
    );
};