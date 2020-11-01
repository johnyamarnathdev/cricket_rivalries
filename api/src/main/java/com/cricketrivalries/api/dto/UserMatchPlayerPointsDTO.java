package com.cricketrivalries.api.dto;

import com.cricketrivalries.api.model.User;

public class UserMatchPlayerPointsDTO {
    private Long profileId;

    private Long matchId;

    private String playerName;

    private String playerNickName;

    private String skillCode;

    private String teamName;

    private String teamNickName;

    private User owner;

    private Integer totalPoints;

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

    public User getOwner() {
        return owner;
    }

    public void setOwner(User owner) {
        this.owner = owner;
    }

    public Integer getTotalPoints() {
        return totalPoints;
    }

    public void setTotalPoints(Integer totalPoints) {
        this.totalPoints = totalPoints;
    }

}
