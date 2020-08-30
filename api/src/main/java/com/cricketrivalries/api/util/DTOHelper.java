package com.cricketrivalries.api.util;

import org.modelmapper.ModelMapper;

public class DTOHelper {
	
	public static <T> Object convertToDto(Object obj, Class clazz) {
		ModelMapper modelMapper = new ModelMapper();
		return modelMapper.map(obj, clazz);
	}
}
