
import React from "react";
import './style.css'

const  Home =()=> {

    return(
        <div className="homeContentContainer">
           <div className="bookContainer">
                <h1>Book Of The day:</h1>
                <div className="book">
                    <img src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" alt="book" />
                    <h2>Harry Potter and the Sorcerer's Stone</h2>
                    <h3>by J.K. Rowling</h3>
                    <p>Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry's eleventh birthday, a great beetle-eyed
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home;