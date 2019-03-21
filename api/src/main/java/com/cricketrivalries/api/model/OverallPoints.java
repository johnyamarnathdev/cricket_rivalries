package com.cricketrivalries.api.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name = "overall_points_vw")
public class OverallPoints {
	
	@Id
	@Column(name = "profile_id")
	private Long profileId;
	
	@Column(name = "points")
	private int points;
	
	@Column(name = "overall_rank")
	private int rank;
	
	@Column(name = "username")
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
