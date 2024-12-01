import React from 'react';
import SearchIcon from '../assets/images/searchIcon.jpg';


const SearchBar =({searchBook, updateCurrentPage})=>{

    const [type, setType]=React.useState('title');
    const [search, setSearch]=React.useState('');

    const handleSearch=()=>{
        const data={
            type:type,
            searchTerm:search
        }
        updateCurrentPage(1);
        searchBook(data);
        setSearch('');
    }

    const handleTypeChange = (e) => {
        setType(e.target.value);
        setSearch('');
    };
    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            console.log('enter');
            handleSearch();
        }
    };
    return(
        <div className="searchContainer">
            <div className="searchingInputs">
                <h2>Search Book:</h2>
                <div className='selection'>
                    <div className='searchBar'>
                        <input type="text" placeholder="Search..." onChange={handleSearchChange} onKeyDown={handleKeyDown}  value={search}/>
                        <img src={SearchIcon} alt="searchIcon" onClick={handleSearch}/>
                    </div>
                    <div className='searchOptions'>
                        <input type="radio" name="searchOption" value="title" id='title' defaultChecked onChange={handleTypeChange}/>
                        <label htmlFor='title'>Title</label>
                        <input type="radio" name="searchOption" value="author" id='author' onChange={handleTypeChange}/>
                        <label htmlFor='author'>Author</label>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default SearchBar;