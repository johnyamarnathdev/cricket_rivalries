package com.cricketrivalries.api.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * UserMatch
 */
@Entity(name = "user_match_points_vw")
public class UserMatchPlerysPoints {

    @Id
    @Column(name = "profile_id")
    private Long profileId;

    @Column(name = "match_id")
    private Long matchId;

    @Column(name = "player_name")
    private String playerName;

    @Column(name = "player_nick_name")
    private String playerNickName;

    @Column(name = "skill_code")
    private String skillCode;

    @Column(name = "team_name")
    private String teamName;

    @Column(name = "team_nick_name")
    private String teamNickName;

    @Column(name = "owner")
    private String owner;

    @Column(name = "total_points")
    private Integer totalPoints;

    public String getPlayerName() {
        return playerName;
    }

    public void setPlayerName(String playerName) {
        this.playerName = playerName;
    }

    public String getPlayerNickName() {
        return playerNickName;
    }

    public void setPlayerNickName(String playerNickName) {
        this.playerNickName = playerNickName;
    }

    public String getSkillCode() {
        return skillCode;
    }

    public void setSkillCode(String skillCode) {
        this.skillCode = skillCode;
    }

    public String getTeamName() {
        return teamName;
    }

    public void setTeamName(String teamName) {
        this.teamName = teamName;
    }

    public String getTeamNickName() {
        return teamNickName;
    }

    public void setTeamNickName(String teamNickName) {
        this.teamNickName = teamNickName;
    }

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }

    public Integer getTotalPoints() {
        return totalPoints;
    }

    public void setTotalPoints(Integer totalPoints) {
        this.totalPoints = totalPoints;
    }

    public Long getProfileId() {
        return profileId;
    }

    public void setProfileId(Long profileId) {
        this.profileId = profileId;
    }

    public Long getMatchId() {
        return matchId;
    }

    public void setMatchId(Long matchId) {
        this.matchId = matchId;
    }

}
