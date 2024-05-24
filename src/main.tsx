import React from "react";
import ReactDOM from "react-dom/client";

import "@fontsource-variable/unbounded";
import "@fontsource-variable/montserrat";
import "./styles/index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./common/routes.ts";
import { MainPage } from "./features/mainPage/mainPage.tsx";
import { ServicesPage } from "./features/services/servicesPage.tsx";
import { ContactsPage } from "./features/contactsPage/contactsPage.tsx";
import { AboutPage } from "./features/aboutPage/aboutPage.tsx";
import { CasesPage } from "./features/casesPage/casesPage.tsx";
import { BriefPage } from "./features/briefPage/briefPage.tsx";
import { BlogPage } from "./features/blogPage/blogPage.tsx";
import { CasePage } from "./features/casePage/casePage.tsx";
import { ServicePage } from "./features/servicePage/servicePage.tsx";
import { ArticlePage } from "./features/articlePage/articlePage.tsx";
import { ServiceCategoryPage } from "./features/serviceCategoryPage/serviceCategoryPage.tsx";

const router = createBrowserRouter(
  [
    {
      path: routes.main,
      element: <MainPage />,
    },
    {
      path: routes.about,
      element: <AboutPage />,
    },
    {
      path: routes.services,
      element: <ServicesPage />,
    },
    {
      path: routes.service,
      element: <ServicePage />,
    },
    {
      path: routes.cases,
      element: <CasesPage />,
    },
    {
      path: routes.blog,
      element: <BlogPage />,
    },
    {
      path: routes.contacts,
      element: <ContactsPage />,
    },
    {
      path: routes.brief,
      element: <BriefPage />,
    },
    {
      path: routes.case,
      element: <CasePage />,
    },
    {
      path: routes.article,
      element: <ArticlePage />,
    },
    {
      path: routes.serviceCategory,
      element: <ServiceCategoryPage />,
    },
  ],
  { basename: "/octoweb" },
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
