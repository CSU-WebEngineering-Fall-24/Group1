import React from 'react';
import SearchIcon from '../assets/images/searchIcon.jpg';


const SearchBar =({SearhBook})=>{

    const handleSearch=(e)=>{
        console.log("Search Book")
    }
    return(
        <div className="searchContainer">
            <div className="searchingInputs">
                <h2>Search Book:</h2>
                <div className='selection'>
                    <div className='searchBar'>
                        <input type="text" placeholder="Search..." />
                        <img src={SearchIcon} alt="searchIcon" />
                    </div>
                    <div className='searchOptions'>
                        <input type="radio" name="searchOption" value="Title" id='title'/>
                        <label htmlFor='title'>Title</label>
                        <input type="radio" name="searchOption" value="Author" id='author'/>
                        <label htmlFor='author'>Author</label>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default SearchBar;