package com.cricketrivalries.api.dto;

import java.sql.Date;

public class TournamentPhaseDTO {
    private Long phaseId;

    private Long phaseNo;

    private Integer tournamentId;

    private Date startDate;

    private Date endDate;

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
