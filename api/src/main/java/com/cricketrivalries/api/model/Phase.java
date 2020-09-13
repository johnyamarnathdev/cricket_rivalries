package com.cricketrivalries.api.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Id;

public class Phase {
    
    @Id
    @Column(name = "PHASE_ID")
    private Long phaseId;

    @Column(name = "PHASE_NO")
    private Long phaseNo;

    @Column(name = "TOURNAMENT_ID")
    private Long tournamentId;

    @Column(name = "START_DATE")
    private Date startDate;

    @Column(name = "END_DATE")
    private Date endDate;

    @Column(name = "NO_OF_TRANSFERS_ALLOWED")
    private Integer transfersAllowed;

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

    public Long getTournamentId() {
        return tournamentId;
    }

    public void setTournamentId(Long tournamentId) {
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

    public Integer getTransfersAllowed() {
        return transfersAllowed;
    }

    public void setTransfersAllowed(Integer transfersAllowed) {
        this.transfersAllowed = transfersAllowed;
    }
}
