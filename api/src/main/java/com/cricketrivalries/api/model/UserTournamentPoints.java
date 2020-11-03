package com.cricketrivalries.api.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity(name = "USER_TOURNAMENT_POINTS")
public class UserTournamentPoints {
    @Id
    @Column(name = "ID")
    private Long id;

    @Column(name = "TOURNAMENTID")
	private Integer tournamentId;

	@Column(name = "POINTS")
	private Integer points;

	@Column(name = "RANKS")
	private Integer ranks;

	@OneToOne
    @JoinColumn(name = "PROFILE_ID")
    private User user;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public Integer getRanks() {
        return ranks;
    }

    public void setRanks(Integer ranks) {
        this.ranks = ranks;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
