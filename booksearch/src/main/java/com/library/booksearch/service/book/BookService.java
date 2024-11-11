package com.library.booksearch.service.book;

import com.library.booksearch.domain.BookResponse;

public interface BookService {
    String getReqTitle(String t);
    String getTitleQueryParam(String title);
    String getReqAuthor(String a);
    String getReqSubject(String s);
    String getReqTitlePages(String t, Number p);
}
