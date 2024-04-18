import React from 'react'
import ReactDOM from 'react-dom/client'

import '@fontsource-variable/unbounded';
import '@fontsource-variable/montserrat';
import './styles/index.scss';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {routes} from './common/routes.ts';
import {MainPage} from './features/mainPage/mainPage.tsx';
import {ServicesPage} from './features/services/servicesPage.tsx';
import {OnlineStoreDevPage} from './features/onlineStoreDevPage/onlineStoreDevPage.tsx';
import {ContactsPage} from './features/contactsPage/contactsPage.tsx';
import {AboutPage} from './features/aboutPage/aboutPage.tsx';

const router = createBrowserRouter([
    {
        path: routes.main,
        element: <MainPage/>,
    }, {
        path: routes.about,
        element: <AboutPage/>,
    },
    {
        path: routes.services,
        element: <ServicesPage/>,
    },
    {
        path: routes.onlineStoreDev,
        element: <OnlineStoreDevPage/>,
    },
    {
        path: routes.cases,
        element: <div>Кейсы</div>,
    },
    {
        path: routes.team,
        element: <div>Команда</div>,
    },
    {
        path: routes.blog,
        element: <div>Блог</div>,
    },
    {
        path: routes.contacts,
        element: <ContactsPage/>,
    },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)