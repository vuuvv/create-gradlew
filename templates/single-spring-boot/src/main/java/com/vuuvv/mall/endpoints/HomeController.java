package com.vuuvv.mall.endpoints;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by vuuvv on 2019-08-23
 */
@RequestMapping("")
@RestController
public class HomeController {
    @GetMapping("")
    public Object hello() {
        return "Hello World!";
    }
}
