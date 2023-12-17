import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home/Home";
import Layout from "../Layout/Layout";
import SpectrumStatus from "../Pages/SpectrumStatus/SpectrumStatus";
import SpectrumStatusLive from "../Pages/SpectrumStatusLive/SpectrumStatusLive"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/status',
                element: <SpectrumStatus></SpectrumStatus>
            },
            {
                path: '/statusLive',
                element: <SpectrumStatusLive></SpectrumStatusLive>
            },
        ]
    }
])