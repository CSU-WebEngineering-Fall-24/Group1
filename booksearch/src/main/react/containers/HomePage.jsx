import React, { useState } from "react";
import './style.css';
import Loading from "../components/Loading.jsx";
import axios from "axios";

const Home = () => {
    const [randomBook, setRandomBook] = useState(null);
    const [randomBookStatus, setRandomBookStatus] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const bookList = [
        { title: "Pride and Prejudice", author: "Jane Austen", subject: "Classic Literature" },
        { title: "1984", author: "George Orwell", subject: "Dystopian Fiction" },
        { title: "To Kill a Mockingbird", author: "Harper Lee", subject: "American Literature" }
        // Add more books as needed
    ];

    const randomBookSearch = async () => {
        const randomIndex = Math.floor(Math.random() * bookList.length);
        const selectedBook = bookList[randomIndex];
        
        try {
            setIsLoading(true);
            const response = await axios.get(`/search/titles`, {
                params: {
                    title: selectedBook.title
                }
            });

            const data = response.data;;

            if (data.docs && data.docs.length > 0) {
                const bookDetails = data.docs[0]; // Pick the first result
                setRandomBook({
                    title: bookDetails.title,
                    author: bookDetails.author_name ? bookDetails.author_name.join(", ") : "Unknown",
                    subject: selectedBook.subject,
                    cover: bookDetails.cover_i ? `https://covers.openlibrary.org/b/id/${bookDetails.cover_i}-L.jpg` : null,
                });
                setRandomBookStatus("success");
                setIsLoading(false);
            } else {
                setRandomBook(null);
                setRandomBookStatus("No results found");
                setIsLoading(false);
            }
        } catch (error) {
            console.error("Error fetching book data:", error);
            setRandomBookStatus("error");
            setIsLoading(false);
        }
    };

    return (
        <div className="homeContentContainer">
            <button type="button" class="btn btn-secondary btn-lg" style={{margin:'24px 0px'}} onClick={randomBookSearch}>Get Random Book</button>
            <div className="bookContainer">
                <h1>Book Of The Day:</h1>
                {randomBookStatus === "success" && randomBook ? (
                    <div className="book">
                        <img
                            src={randomBook.cover || "placeholder-image.png"}
                            alt={randomBook.title}
                        />
                        <h2>Title: {randomBook.title}</h2>
                        <h3>Author: {randomBook.author}</h3>
                        <p>Subject: {randomBook.subject}</p>
                    </div>
                ) : (
                    <p>{randomBookStatus || "Click the button to fetch a book!"}</p>
                )}
            </div>
            {isLoading && <div className="loadingContainer"> <Loading /></div>
           }
        </div>
    );
};

export default Home;
