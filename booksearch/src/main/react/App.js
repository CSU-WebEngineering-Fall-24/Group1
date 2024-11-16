import React from "react";
import ReactDom from 'react-dom/client'
import Home from "./containers/HomePage.jsx";
import AppContainer from "./containers/AppContainer.jsx";
import BookSearchPage from './containers/BookSearchPage.jsx'

import { createBrowserRouter,
    RouterProvider
 } from "react-router-dom";


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
            ]
        },
    ]
 )

ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)