package com.cricketrivalries.api.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

/**
 * UserMatch
 */
@Entity(name = "USER_MATCH_POINTS_VW")
public class UserMatchPlerysPoints {

    @Id
    @Column(name= "ID")
    private Long id;

    @Column(name = "PROFILE_ID")
    private Long profileId;

    @Column(name = "MATCH_ID")
    private Long matchId;

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

    @OneToOne
    @JoinColumn(name = "OWNER")
    private User owner;

    @Column(name = "TOTAL_POINTS")
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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

}
