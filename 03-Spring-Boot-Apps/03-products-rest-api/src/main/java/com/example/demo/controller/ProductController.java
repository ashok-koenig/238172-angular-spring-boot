package com.example.demo.controller;

import com.example.demo.entity.Product;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController {

    private List<Product> products;
    public ProductController(){
        products = new ArrayList<>();
        products.add(new Product(1, "iPhone 17", 1789.0));
        products.add(new Product(2, "iPhone 16", 1689.0));
    }

    @GetMapping
    public List<Product> getAllProducts(){
        return products;
    }

    @PostMapping
    public Product createProduct(@RequestBody Product product){
        products.add(product);
        return product;
    }

    @GetMapping("/{id}")
    public Product getProductById(@PathVariable Integer id){
//        Product product=null;
//        for(Product p : products){
//            if(p.getId() == id){
//                product = p;
//            }
//        }
//        return product;
        return products.stream().filter(product -> product.getId() == id).findFirst().orElse(null);
    }

    @PutMapping("/{id}")
    public Product updateProduct(@RequestBody Product product, @PathVariable Integer id){
        for(Product p: products){
            if(p.getId() == id){
                p.setTitle(product.getTitle());
                p.setPrice(product.getPrice());
                return p;
            }
        }
        return  null;
    }

    @DeleteMapping("/{id}")
    public String deleteProduct(@PathVariable Integer id){
        boolean isDeleted = products.removeIf(product -> product.getId() == id);
        if(isDeleted){
            return "Product deleted";
        }else{
            return "Product not found";
        }
    }
}
