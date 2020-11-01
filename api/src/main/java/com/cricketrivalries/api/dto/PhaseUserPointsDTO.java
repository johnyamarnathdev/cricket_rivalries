package com.cricketrivalries.api.dto;

public class PhaseUserPointsDTO {

	private Long profileId;

	private int points;

	private int rank;

	private String phaseId;

	private String phaseNo;

	private String userName;

	private Integer transfersLeft;

	public Long getProfileId() {
		return profileId;
	}

	public void setProfileId(Long profileId) {
		this.profileId = profileId;
	}

	public int getPoints() {
		return points;
	}

	public void setPoints(int points) {
		this.points = points;
	}

	public int getRank() {
		return rank;
	}

	public void setRank(int rank) {
		this.rank = rank;
	}

	public String getPhaseId() {
		return phaseId;
	}

	public void setPhaseId(String phaseId) {
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
