package com.cricketrivalries.api.controller;

import java.util.ArrayList;
import java.util.List;

import com.cricketrivalries.api.dto.TournamentMatchDTO;
import com.cricketrivalries.api.model.TournamentMatch;
import com.cricketrivalries.api.repository.TournamentMatchesRepo;
import com.cricketrivalries.api.util.DTOHelper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api")
public class TournamentMatchesController {

    @Autowired
    private TournamentMatchesRepo repo;

    @GetMapping(value = "/tournamentmatches/{tournamentId}")
    public List<TournamentMatchDTO> getTournamentMatches(@PathVariable Long tournamentId) {
        List<TournamentMatchDTO> resultList = new ArrayList<>();
        List<TournamentMatch> tournamentMatchs = repo.findAllByTournamentId(tournamentId);

        tournamentMatchs.forEach(match -> {
            resultList.add((TournamentMatchDTO) DTOHelper.convertToDto(match, TournamentMatchDTO.class));
        });

        return resultList;
    }
}
