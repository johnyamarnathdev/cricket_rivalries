package com.cricketrivalries.api.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(path = "/")
public class HomeController {
    @GetMapping
	public String home() {
		return "forward:/index.html";
	}
}
