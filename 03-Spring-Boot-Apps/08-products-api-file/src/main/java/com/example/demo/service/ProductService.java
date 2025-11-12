package com.example.demo.service;

import com.example.demo.entity.Product;
import com.example.demo.exception.ProductNotFoundException;
import com.example.demo.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;

@Service
public class ProductService {
    // Dependency Injection
    @Autowired
    private ProductRepository productRepository;
    // Create and update
    public Product saveProduct(Product product){
        return productRepository.save(product);
    }

    public Product createProduct(Product product, MultipartFile file){
        if(!file.isEmpty()){
            String fileName = null;
            try {
                fileName = savePicture(file);
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
            product.setPicture(fileName);
        }
        return productRepository.save(product);
    }

    public String savePicture(MultipartFile file) throws IOException{
        Path uploadPath = Paths.get("./src/main/resources/static/uploads");
        if(!Files.exists(uploadPath)){
            Files.createDirectories(uploadPath);
        }
        String fileName = file.getOriginalFilename();
        Path filePath = uploadPath.resolve(fileName);
        Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);
        return fileName;
    }

    public List<Product> getAllProducts(){
        return productRepository.findAll();
    }

    public Product getProductById(Integer id){
        return productRepository.findById(id).orElseThrow(()-> new ProductNotFoundException(id));
    }

    public void deleteProductById(Integer id){
        productRepository.deleteById(id);
    }
}
