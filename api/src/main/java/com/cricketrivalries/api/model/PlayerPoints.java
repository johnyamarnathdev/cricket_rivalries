package com.cricketrivalries.api.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name = "player_match_points")
public class PlayerPoints {

    @Id
    @Column(name = "player_id")
    private Long playerId;

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

    @Column(name = "bowling_points")
    private Long bowlingPoints;

    @Column(name = "batting_points")
    private Long battingPoints;

    @Column(name = "fielding_points")
    private Long fieldingPoints;

    @Column(name = "bonus_points")
    private Long bonusPoints;

    @Column(name = "total_points")
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
