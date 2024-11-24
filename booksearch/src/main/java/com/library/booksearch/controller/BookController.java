package com.library.booksearch.controller;

import com.library.booksearch.domain.BookResponse;
import com.library.booksearch.service.book.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    @GetMapping("/search/authors/pages")
    public String getSearchByAuthor(@RequestParam("a") String a, @RequestParam("p") Number p) {
        return bookService.getReqAuthorPages(a,p);
    }
    @GetMapping(value = "/book/{cid}", produces = MediaType.IMAGE_JPEG_VALUE)
        public ResponseEntity<byte[]> getBookCovers(@PathVariable("cid") String cid) {
        byte[] bytes = bookService.getBookCovers(cid);
        return ResponseEntity.ok().contentType(MediaType.IMAGE_JPEG).body(bytes);
    }

}
