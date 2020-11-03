package com.cricketrivalries.api.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name = "PHASE_USER_POINTS_VW")
public class PhaseUserPoints {

	@Id
	@Column(name = "PROFILE_ID")
	private Long profileId;

	@Column(name = "TOURNAMENT_ID")
	private Integer tournamentId;

	@Column(name = "POINTS")
	private Integer points;

	@Column(name = "PHASE_RANK")
	private Integer rank;

	@Column(name = "PHASE_ID")
	private Integer phaseId;

	@Column(name = "PHASE_NO")
	private String phaseNo;

	@Column(name = "USERNAME")
	private String userName;

	@Column(name = "TRANSFERS_LEFT")
	private Integer transfersLeft;

	public Long getProfileId() {
		return profileId;
	}

	public void setProfileId(Long profileId) {
		this.profileId = profileId;
	}

	public Integer getTournamentId() {
		return tournamentId;
	}

	public void setTournamentId(Integer tournamentId) {
		this.tournamentId = tournamentId;
	}

	public Integer getPoints() {
		return points;
	}

	public void setPoints(Integer points) {
		this.points = points;
	}

	public Integer getRank() {
		return rank;
	}

	public void setRank(Integer rank) {
		this.rank = rank;
	}

	public Integer getPhaseId() {
		return phaseId;
	}

	public void setPhaseId(Integer phaseId) {
		this.phaseId = phaseId;
	}

	public String getPhaseNo() {
		return phaseNo;
	}

	public void setPhaseNo(String phaseNo) {
		this.phaseNo = phaseNo;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public Integer getTransfersLeft() {
		return transfersLeft;
	}

	public void setTransfersLeft(Integer transfersLeft) {
		this.transfersLeft = transfersLeft;
	}

}
