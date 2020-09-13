package com.cricketrivalries.api.controller;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

import com.cricketrivalries.api.dto.UserDTO;
import com.cricketrivalries.api.model.User;
import com.cricketrivalries.api.repository.UserRepository;

@RestController
@RequestMapping("/api")
public class UserController {

	@Autowired
	UserRepository userRepo;

	@Autowired
	private ModelMapper modelMapper;

	@GetMapping(value = "/{id}")
	public UserDTO getUser(@PathVariable("id") long id) {
		User user = userRepo.findById(id).orElse(null);
		return convertToDto(user);
	}

	@GetMapping(value = "/allusers")
	public List<UserDTO> getAllUsers() {
		Iterable<User> users = userRepo.findAll();
		List<UserDTO> userDTOs = new ArrayList<>();
		users.forEach(user -> userDTOs.add(convertToDto(user)));
		return userDTOs;
	}

	private UserDTO convertToDto(User user) {
		UserDTO userDto = modelMapper.map(user, UserDTO.class);
		return userDto;
	}
}
