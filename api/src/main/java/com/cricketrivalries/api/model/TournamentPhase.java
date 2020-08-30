package com.cricketrivalries.api.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name = "tournament_phases")
public class TournamentPhase {
    @Id
    @Column(name = "phase_id")
    private Long phaseId;

    @Column(name = "phase_no")
    private Long phaseNo;

    @Column(name = "tournamet_id")
    private Integer tournamentId;

    @Column(name = "start_date")
    private Date startDate;

    @Column(name = "end_date")
    private Date endDate;

    @Column(name = "NO_OF_TRANSFERS_ALLOWED")
    private Integer noOfTransfersAllowed;

    public Long getPhaseId() {
        return phaseId;
    }

    public void setPhaseId(Long phaseId) {
        this.phaseId = phaseId;
    }

    public Long getPhaseNo() {
        return phaseNo;
    }

    public void setPhaseNo(Long phaseNo) {
        this.phaseNo = phaseNo;
    }

    public Integer getTournamentId() {
        return tournamentId;
    }

    public void setTournamentId(Integer tournamentId) {
        this.tournamentId = tournamentId;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public Integer getNoOfTransfersAllowed() {
        return noOfTransfersAllowed;
    }

    public void setNoOfTransfersAllowed(Integer noOfTransfersAllowed) {
        this.noOfTransfersAllowed = noOfTransfersAllowed;
    }
}
