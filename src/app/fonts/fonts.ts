import {Montserrat, Unbounded} from 'next/font/google';

export const unbounded = Unbounded({
    subsets: ['cyrillic'],
    variable: '--unbounded',
    // display: 'auto',
    display: 'swap',
    weight: ["200", "300", "400", "500", "600", "800", "900" ],
    fallback: ['sans-serif','Calibri', 'Arial']
});
export const montserrat = Montserrat({
    subsets: ['cyrillic'],
    variable: '--montserrat',
    display: 'swap',
    weight: ["300", "500" ],
    fallback: ['sans-serif', 'Arial', 'Calibri']
})
