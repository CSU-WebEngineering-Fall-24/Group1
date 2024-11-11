package com.library.booksearch.service.impl.book;

import com.library.booksearch.domain.BookResponse;
import com.library.booksearch.service.book.BookService;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class BookServiceImpl implements BookService {

    @Override
    public String getReqTitle(String t) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject("https://openlibrary.org/search.json?q="+t,String.class );
    }

    @Override
    public String getTitleQueryParam(String title) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject("https://openlibrary.org/search.json?title="+title,String.class );
    }

    @Override
    public String getReqAuthor(String a) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject("https://openlibrary.org/search/authors.json?q="+a,String.class );
    }

    @Override
    public String getReqSubject(String s) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject("https://openlibrary.org/search.json?subject="+s,String.class );
    }

    @Override
    public String getReqTitlePages(String t, Integer num) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject("https://openlibrary.org/search.json?q="+t+"&page="+num,String.class );
    }


}
