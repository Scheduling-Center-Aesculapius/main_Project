package br.com.schedulingcenteraesculapius.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller  //mvc
public class HomeController {
    @RequestMapping("/")
    public String homeApp(){
        return "index";
    }
}
