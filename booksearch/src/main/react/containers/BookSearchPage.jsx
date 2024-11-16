import React, { useEffect } from "react";
import './style.css';
import SearchBar from '../components/SearchBar.jsx';

const  BookSearchPage =()=> {

    const SearhBook =(data)=>{
        console.log("Search Book")
    }


    return(
        <div>
            <SearchBar searchBook={SearhBook}/>
        </div>
    )
}

export default BookSearchPage;