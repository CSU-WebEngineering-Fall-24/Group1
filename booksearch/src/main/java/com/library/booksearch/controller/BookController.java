package com.library.booksearch.controller;

import com.library.booksearch.domain.BookResponse;
import com.library.booksearch.service.book.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BookController {

    @Autowired
    private BookService bookService;

    @GetMapping("/search/q/titles")
    public String getSearchTitle(@RequestParam("t") String t) {
        return bookService.getReqTitle(t);
    }

    @GetMapping("/search/titles")
    public String getTitleQuery(@RequestParam("title") String title) {
        return bookService.getTitleQueryParam(title);
    }

    @GetMapping("/search/authors")
    public String getSearchAuthor(@RequestParam("a") String a) {
        return bookService.getReqAuthor(a);
    }

    @GetMapping("/search/subject")
    public String getSearchSubject(@RequestParam("s") String s) {
        return bookService.getReqSubject(s);
    }

    @GetMapping("/search/titles/pages")
    public String getSearchTitle(@RequestParam("t") String t, @RequestParam("p") Number p) {
        return bookService.getReqTitlePages(t,p);
    }


}