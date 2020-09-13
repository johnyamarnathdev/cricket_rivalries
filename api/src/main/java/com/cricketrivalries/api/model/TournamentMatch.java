package com.cricketrivalries.api.model;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity(name = "TOURNAMENT_MATCHES")
public class TournamentMatch {

    @Id
    @Column(name = "MATCH_ID")
    private Long matchId;

    @Column(name = "TOURNAMENT_ID")
    private Long tournamentId;

    @OneToOne
    @JoinColumn(name = "PHASE_ID")
    private TournamentPhase tournamentPhase;

    @OneToOne
    @JoinColumn(name = "TEAM1_ID")
    private Team team1;

    @OneToOne
    @JoinColumn(name = "TEAM2_ID")
    private Team team2;

    @Column(name = "IS_POINTS_CALCULATED")
    private Boolean matchPointsCalculated;

    @Column(name = "MATCH_TYPE")
    private String matchType;

    @Column(name = "MATCH_DATE_TIME")
    private Timestamp matchDateTime;

    public Long getMatchId() {
        return matchId;
    }

    public void setMatchId(Long matchId) {
        this.matchId = matchId;
    }

    public Long getTournamentId() {
        return tournamentId;
    }

    public void setTournamentId(Long tournamentId) {
        this.tournamentId = tournamentId;
    }

    public TournamentPhase getTournamentPhase() {
        return tournamentPhase;
    }

    public void setTournamentPhase(TournamentPhase tournamentPhase) {
        this.tournamentPhase = tournamentPhase;
    }

    public Team getTeam1() {
        return team1;
    }

    public void setTeam1(Team team1) {
        this.team1 = team1;
    }

    public Team getTeam2() {
        return team2;
    }

    public void setTeam2(Team team2) {
        this.team2 = team2;
    }

    public Boolean getMatchPointsCalculated() {
        return matchPointsCalculated;
    }

    public void setMatchPointsCalculated(Boolean matchPointsCalculated) {
        this.matchPointsCalculated = matchPointsCalculated;
    }

    public String getMatchType() {
        return matchType;
    }

    public void setMatchType(String matchType) {
        this.matchType = matchType;
    }

    public Timestamp getMatchDateTime() {
        return matchDateTime;
    }

    public void setMatchDateTime(Timestamp matchDateTime) {
        this.matchDateTime = matchDateTime;
    }
}
