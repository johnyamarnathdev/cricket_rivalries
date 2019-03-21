package com.cricketrivalries.api.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cricketrivalries.api.dto.OverallPointsDTO;
import com.cricketrivalries.api.model.OverallPoints;
import com.cricketrivalries.api.repository.OverallPointsRepository;
import com.cricketrivalries.api.util.DTOHelper;

@RestController
@RequestMapping(path = "/api")
public class OverallPointsController {

	@Autowired
	OverallPointsRepository repo;

	@GetMapping(value = "/overalluserpoints")
	public List<OverallPointsDTO> getOverallPoints() {
		Iterable<OverallPoints> overallPoints = repo.findAll();
		List<OverallPointsDTO> list = new ArrayList<OverallPointsDTO>();
		overallPoints.forEach(data -> {
			list.add((OverallPointsDTO) DTOHelper.convertToDto(data, OverallPointsDTO.class));
		});

		return list;
	}
}
