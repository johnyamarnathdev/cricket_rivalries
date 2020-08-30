package com.cricketrivalries.api.repository;

import java.util.List;

import com.cricketrivalries.api.model.UserMatchPoint;

import org.springframework.data.repository.CrudRepository;

/**
 * UserMatchPointsRepo
 */
public interface UserMatchPointsRepo extends CrudRepository<UserMatchPoint, Long> {

    public List<UserMatchPoint> findByProfileIdAndMatchId(Long profileId, Long matchId);
}
