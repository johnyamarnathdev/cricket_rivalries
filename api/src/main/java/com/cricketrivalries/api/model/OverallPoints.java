package com.cricketrivalries.api.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name = "OVERALL_USER_POINTS_VW")
public class OverallPoints {

	@Id
	@Column(name = "PROFILE_ID")
	private Long profileId;

	@Column(name = "POINTS")
	private int points;

	@Column(name = "OVERALL_RANK")
	private int rank;

	@Column(name = "USERNAME")
	private String userName;

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

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}
}
