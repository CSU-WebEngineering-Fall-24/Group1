# Group1

## Introduction

The BookSearch application displays a random books with author information and allows you to search for a specific book by Title or Author using the search options and browse books based on the results.

## Requirements

* An Integrated Development Environment like IntelliJ IDEA or Visual Studio Code
* Node.js and a Package Manager
* A modern web browser such as Google Chrome, Mozilla Firefox, or Microsoft Edge and Internet access

## Installation

1. To run the BookSearch app locally download the repository or clone to your local development environment. Explore the structure and important files.
2. Follow the instruction to load Gradle library if prompted (IntelliJ).
3. To install npm run 'npm install' from react folder in your terminal window. This will create a new node_modules folder with required packages.
4. Open src/main/resources/application.properties and update server.port if need. This project is using port 8084.
5. In a terminal window to cd into the react folder root and run 'npm run build'.
6. Run the main java Application file BooksearchApplication.java
7. Return to your browser and enter localhost address with server port number <http://localhost:8084/>.

## APIs used in project

The URL format for API is simple and returns information based on the query parameter. Eg:

* <https://openlibrary.org/search.json?q=the+lord+of+the+rings>
* <https://openlibrary.org/search.json?title=the+lord+of+the+rings>
* <https://openlibrary.org/search.json?author=tolkien>
* <https://openlibrary.org/search.json?subject=sharks>
* <https://openlibrary.org/search.json?q=the+lord+of+the+rings&page=2>
* <https://covers.openlibrary.org/b/id/240727-L.jpg>

_Note: To learn more about the Open Library Search API you can explore further documentation here_
_<https://openlibrary.org/developers/api>_

## Maintainers

* Robert Daniel
* Kennard McGill
* Jian Zhang
