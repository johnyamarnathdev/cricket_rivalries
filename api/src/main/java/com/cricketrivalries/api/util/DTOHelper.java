package com.cricketrivalries.api.util;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

import com.cricketrivalries.api.dto.UserDTO;
import com.cricketrivalries.api.model.User;

public class DTOHelper {
	
	public static <T> Object convertToDto(Object user, Class clazz) {
		ModelMapper modelMapper = new ModelMapper();
		return modelMapper.map(user, clazz);
	}
}
