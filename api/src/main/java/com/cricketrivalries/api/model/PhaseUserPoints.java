package com.cricketrivalries.api.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name = "phase_user_points_vw")
public class PhaseUserPoints {

	@Id
	@Column(name = "profile_id")
	private Long profileId;

	@Column(name = "tournamentId")
	private Integer tournamentId;

	@Column(name = "points")
	private Integer points;

	@Column(name = "phase_rank")
	private Integer rank;

	@Column(name = "phase_id")
	private Integer phaseId;

	@Column(name = "phase_no")
	private String phaseNo;

	@Column(name = "username")
	private String userName;

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

}
