package com.example.demo.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {

    @GetMapping
    public String allUsers(){
        return "List of all users";
    }

    @GetMapping("/{id}")
    public String getAnUser(@PathVariable Integer id){
        return "User detail with id: "+ id;
    }

    @PostMapping
    public String createUser(@RequestBody String user){
        return "New user created with request body: "+ user;
    }

    @PutMapping("/{id}")
    public String updateUser(@RequestBody String user, @PathVariable Integer id){
        return "User updated with id: "+ id + " and request body: "+ user;
    }

    @DeleteMapping("/{id}")
    public String deleteUser(@PathVariable Integer id){
        return "User deleted with id: "+ id;
    }
}
