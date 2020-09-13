package com.cricketrivalries.api.repository;

import java.util.List;

import com.cricketrivalries.api.model.UserMatchPlerysPoints;

import org.springframework.data.repository.CrudRepository;

/**
 * UserMatchPointsRepo
 */
public interface UserMatchPlayerPointsRepo extends CrudRepository<UserMatchPlerysPoints, Long> {

    public List<UserMatchPlerysPoints> findByProfileIdAndMatchId(Long profileId, Long matchId);
}
