package com.cricketrivalries.api.dto;

public class PlayerPointsDTO {

    private Long playerId;

    private String playerName;

    private String playerNickName;

    private String skillCode;

    private String teamName;

    private String teamNickName;

    private Long bowlingPoints;

    private Long battingPoints;

    private Long fieldingPoints;

    private Long bonusPoints;

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
