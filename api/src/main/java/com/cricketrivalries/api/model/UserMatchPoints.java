package com.cricketrivalries.api.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name = "USER_MATCH_POINTS")
public class UserMatchPoints {

    @Id
    @Column(name = "PROFILE_ID")
    private Long profileId;

    @Column(name = "MATCH_ID")
    private Long matchId;

    @Column(name = "POINTS")
    private Long points;

    @Column(name = "RANK")
    private Integer rank;

    public Long getMatchId() {
        return matchId;
    }

    public void setMatchId(Long matchId) {
        this.matchId = matchId;
    }

    public Long getProfileId() {
        return profileId;
    }

    public void setProfileId(Long profileId) {
        this.profileId = profileId;
    }

    public Long getPoints() {
        return points;
    }

    public void setPoints(Long points) {
        this.points = points;
    }

    public Integer getRank() {
        return rank;
    }

    public void setRank(Integer rank) {
        this.rank = rank;
    }
}