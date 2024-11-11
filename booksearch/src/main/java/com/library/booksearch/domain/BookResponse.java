package com.library.booksearch.domain;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter


public class BookResponse {
    private int numFound;
    private int start;
    private boolean numFoundExact;
    private String docs;
    private String q;
    private String offset;
}
