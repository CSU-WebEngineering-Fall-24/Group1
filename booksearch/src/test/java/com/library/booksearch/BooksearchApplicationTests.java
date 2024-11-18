package com.library.booksearch;

import com.library.booksearch.service.book.BookService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest
class BooksearchApplicationTests {

	@Autowired
	private BookService bookService;

	// Testing Service Implementation. We have 5 services which are tested here for a response from the api call

	@Test
	void testTitles() {
		String resp = bookService.getReqTitle("react");
		assertNotNull(resp);
	}

	@Test
	void testQueryParamTitles() {
		String resp = bookService.getTitleQueryParam("debug");
		assertNotNull(resp);
	}
	@Test
	void testSearchAuthors() {
		String resp = bookService.getReqAuthor("twain");
		assertNotNull(resp);
	}

	@Test
	void testSearchSubjects() {
		String resp = bookService.getReqSubject("sharks");
		assertNotNull(resp);
	}

	@Test
	void testTitlesPages() {
		String resp = bookService.getReqTitlePages("debug", 4);
		assertNotNull(resp);
	}

}

