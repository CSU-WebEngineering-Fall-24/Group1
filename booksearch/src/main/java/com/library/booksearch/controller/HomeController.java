package com.library.booksearch.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
    @GetMapping(value = {"/", "/bookSearch", "/aboutus"})
    public String index() {
        return "index";
    }
}