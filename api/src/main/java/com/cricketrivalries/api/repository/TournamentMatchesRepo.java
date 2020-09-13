package com.cricketrivalries.api.repository;

import java.util.List;

import com.cricketrivalries.api.model.TournamentMatch;

import org.springframework.data.repository.CrudRepository;

/**
 * TournamentMatchesRepo
 */
public interface TournamentMatchesRepo extends CrudRepository<TournamentMatch, Long> {

    public List<TournamentMatch> findAllByTournamentId(Long tournamentId);
}