package com.library.booksearch.domain;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter


public class BookResponse {
    private Number numFound;
    private Number start;
    private Boolean numFoundExact;
    private String docs;
    private String q;
    private String offset;
}
