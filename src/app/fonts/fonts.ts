import {Montserrat, Unbounded} from 'next/font/google';

export const unbounded = Unbounded({
    subsets: ['cyrillic'],
    variable: '--unbounded',
    display: 'auto',
    fallback: ['sans-serif','Calibri', 'Arial']
});
export const montserrat = Montserrat({
    subsets: ['cyrillic'],
    variable: '--montserrat',
    fallback: ['sans-serif', 'Arial', 'Calibri']
})
