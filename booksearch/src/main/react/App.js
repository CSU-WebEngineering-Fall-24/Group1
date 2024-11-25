import React from "react";
import ReactDom from 'react-dom/client'
import Home from "./containers/HomePage.jsx";
import AppContainer from "./containers/AppContainer.jsx";
import BookSearchPage from './containers/BookSearchPage.jsx'

import { createBrowserRouter,
    RouterProvider
 } from "react-router-dom";
import AboutUsPage from "./containers/AboutUsPage.jsx";


 const router = createBrowserRouter(
    [
        {   
            path:"/",
            element: <AppContainer/>,
            children:[
                {
                    index:true,
                    element:<Home/>
                },
                {
                    path:"bookSearch",
                    element:<BookSearchPage/>
                },
                {
                    path:"aboutus",
                    element:<AboutUsPage/>
                },
            ]
        },
    ]
 )

ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)