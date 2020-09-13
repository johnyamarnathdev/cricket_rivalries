package com.cricketrivalries.api.dto;

public class UserDTO {

	private Long profileId;

	private String firstName;

	private String lastName;

	private String userName;

	public Long getProfileId() {
		return profileId;
	}

	public void setProfileId(Long id) {
		this.profileId = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}
}
