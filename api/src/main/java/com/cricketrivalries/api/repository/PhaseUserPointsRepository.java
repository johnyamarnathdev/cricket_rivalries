package com.cricketrivalries.api.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.cricketrivalries.api.model.PhaseUserPoints;

public interface PhaseUserPointsRepository extends CrudRepository<PhaseUserPoints, Integer> {

	List<PhaseUserPoints> findByTournamentIdAndPhaseId(Integer tournamentId, Integer phaseId);
}
