package com.cricketrivalries.api.dto;

import java.sql.Timestamp;

import com.cricketrivalries.api.model.Team;
import com.cricketrivalries.api.model.TournamentPhase;

public class TournamentMatchDTO {
    private Long matchId;
    private Long tournamentId;
    private TournamentPhase tournamentPhase;
    private Team team1;
    private Team team2;
    private Boolean matchPointsCalculated;
    private String matchType;
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
