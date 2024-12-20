package com.library.booksearch.service.impl.book;

import com.library.booksearch.service.book.BookService;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;


@Service
public class BookServiceImpl implements BookService {
    // title => t
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
    // author => a
    @Override
    public String getReqAuthor(String a) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject("https://openlibrary.org/search/authors.json?q="+a,String.class );
    }
    // subject => s
    @Override
    public String getReqSubject(String s) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject("https://openlibrary.org/search.json?subject="+s,String.class );
    }
    // title => t  / page number => p
    @Override
    public String getReqTitlePages(String t, Number p) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject("https://openlibrary.org/search.json?q="+t+"&page="+p,String.class );
    }
    // author => a  / page number => p
    @Override
    public String getReqAuthorPages(String a, Number p) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject("https://openlibrary.org/search.json?q="+a+"&page="+p, String.class );
    }
    // cover id => cid
    @Override
    public byte[] getBookCovers(String cid) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject("https://covers.openlibrary.org/b/id/"+ cid +"-L.jpg", byte[].class );
    }

}
