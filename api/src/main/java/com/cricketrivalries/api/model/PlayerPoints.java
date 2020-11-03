package com.cricketrivalries.api.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name = "PLAYER_MATCH_POINTS")
public class PlayerPoints {

    @Id
    @Column(name = "PLAYER_ID")
    private Long playerId;

    @Column(name = "PLAYER_NAME")
    private String playerName;

    @Column(name = "PLAYER_NICK_NAME")
    private String playerNickName;

    @Column(name = "SKILL_CODE")
    private String skillCode;

    @Column(name = "TEAM_NAME")
    private String teamName;

    @Column(name = "TEAM_NICK_NAME")
    private String teamNickName;

    @Column(name = "BOWLING_POINTS")
    private Long bowlingPoints;

    @Column(name = "BATTING_POINTS")
    private Long battingPoints;

    @Column(name = "FIELDING_POINTS")
    private Long fieldingPoints;

    @Column(name = "BONUS_POINTS")
    private Long bonusPoints;

    @Column(name = "TOTAL_POINTS")
    private Long totalPoints;

    public Long getPlayerId() {
        return playerId;
    }

    public void setPlayerId(Long playerId) {
        this.playerId = playerId;
    }

    public Long getBowlingPoints() {
        return bowlingPoints;
    }

    public void setBowlingPoints(Long bowlingPoints) {
        this.bowlingPoints = bowlingPoints;
    }

    public Long getBattingPoints() {
        return battingPoints;
    }

    public void setBattingPoints(Long battingPoints) {
        this.battingPoints = battingPoints;
    }

    public Long getFieldingPoints() {
        return fieldingPoints;
    }

    public void setFieldingPoints(Long fieldingPoints) {
        this.fieldingPoints = fieldingPoints;
    }

    public Long getBonusPoints() {
        return bonusPoints;
    }

    public void setBonusPoints(Long bonusPoints) {
        this.bonusPoints = bonusPoints;
    }

    public Long getTotalPoints() {
        return totalPoints;
    }

    public void setTotalPoints(Long totalPoints) {
        this.totalPoints = totalPoints;
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
}
