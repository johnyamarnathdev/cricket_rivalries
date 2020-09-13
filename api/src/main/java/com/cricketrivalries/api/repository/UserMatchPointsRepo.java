package com.cricketrivalries.api.repository;

import com.cricketrivalries.api.model.UserMatchPoints;

import org.springframework.data.repository.CrudRepository;

public interface UserMatchPointsRepo extends CrudRepository<UserMatchPoints, Long> {
    public UserMatchPoints findByProfileIdAndMatchId(Long profileId, Long matchId);
}