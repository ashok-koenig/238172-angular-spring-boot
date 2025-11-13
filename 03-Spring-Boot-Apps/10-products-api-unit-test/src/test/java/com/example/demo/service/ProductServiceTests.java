package com.example.demo.service;

import com.example.demo.entity.Product;
import com.example.demo.repository.ProductRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.List;

import static org.mockito.Mockito.when;

public class ProductServiceTests {

    @Mock
    private ProductRepository productRepository;

    @InjectMocks
    private ProductService productService;

    private Product sampleProduct;

    @BeforeEach
    void setup(){
        MockitoAnnotations.openMocks(this);
        sampleProduct = new Product(1, "iPhone 17", "Smartphone", 1789.0);
    }

    @Test
    void testGetAllProducts(){
        List<Product> mockProducts = List.of(sampleProduct);
        when(productRepository.findAll()).thenReturn(mockProducts);
        List<Product> result = productService.getAllProducts();
        Assertions.assertEquals(1, result.size());
    }
}
