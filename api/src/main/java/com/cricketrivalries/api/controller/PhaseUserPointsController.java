package com.cricketrivalries.api.controller;

import java.util.List;

import com.cricketrivalries.api.model.PhaseUserPoints;
import com.cricketrivalries.api.repository.PhaseUserPointsRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api")
public class PhaseUserPointsController {

	@Autowired
	PhaseUserPointsRepository repo;

	@GetMapping(value = "/phasepoints/{tournamentId}/{phaseId}")
	public List<PhaseUserPoints> getPhaseUserPoints(@PathVariable(value = "tournamentId") Integer tournamentId,
			@PathVariable(value = "phaseId") Integer phaseId) {
		return repo.findByTournamentIdAndPhaseId(tournamentId, phaseId);
	}
}
