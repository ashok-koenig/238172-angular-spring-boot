package com.example.demo.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

@RestController
public class DemoController {

    @RequestMapping("/")
    public String homePage(){
        return "Welcome to Spring Boot";
    }

    @RequestMapping("/about")
    public String aboutPage(){
        return "This is about page content";
    }

    @RequestMapping("/person")
    public Map<String, Object> jsonResponse(){
        Map<String, Object> person = new HashMap<>();
        person.put("name", "John");
        person.put("age", 25);
        return person;
    }
}
