package com.cricketrivalries.api.repository;

import java.util.List;

import com.cricketrivalries.api.model.PlayerPoints;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface PlayerPointsRepository extends CrudRepository<PlayerPoints, Long> {

    String TOTAL_PLYER_POINTS_SQL = "SELECT p.player_id, "+
                            " p.player_name, "+
                            " p.player_nick_name, "+
                            " tp.skill_code, "+
                            " teams.NAME  as team_name, "+
                            " teams.nick_name as team_nick_name, "+ 
                            " Sum(batting_points)  AS batting_points, "+
                            " Sum(bowling_points)  AS bowling_points, "+
                            " Sum(fielding_points) AS fielding_points, "+
                            " Sum(bonus_points)    AS bonus_points, "+
                            " Sum(total_points)    AS total_points "+
                            " FROM   player_match_points pmp "+
                            " INNER JOIN players p "+
                            "         ON p.player_id = pmp.player_id "+
                            " INNER JOIN tournaments t "+
                            "         ON t.tournament_id = ? "+
                            " INNER JOIN tournament_players tp "+
                            "         ON tp.player_id = p.player_id "+
                            "            AND t.tournament_id = tp.tournament_id "+
                            " INNER JOIN teams teams "+
                            "         ON teams.team_id = tp.team_id "+
                            " GROUP  BY player_id "+
                            " ORDER  BY total_points desc" ;

    @Query(value = TOTAL_PLYER_POINTS_SQL, nativeQuery = true)
    public List<PlayerPoints> getTotalPlayerPoints(Integer tournamentId);
}