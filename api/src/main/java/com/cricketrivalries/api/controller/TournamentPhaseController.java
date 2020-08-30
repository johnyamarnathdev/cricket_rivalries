package com.cricketrivalries.api.controller;

import java.util.ArrayList;
import java.util.List;

import com.cricketrivalries.api.dto.TournamentPhaseDTO;
import com.cricketrivalries.api.model.TournamentPhase;
import com.cricketrivalries.api.repository.TournamentPhaseRepository;
import com.cricketrivalries.api.util.DTOHelper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api")
public class TournamentPhaseController {

    @Autowired
    private TournamentPhaseRepository tournamentPhaseRepository;

    @GetMapping(value = "/tournamentphases")
    public List<TournamentPhaseDTO> getAll() {
        Iterable<TournamentPhase> phases = tournamentPhaseRepository.findAll();
        List<TournamentPhaseDTO> list = new ArrayList<TournamentPhaseDTO>();
        phases.forEach(data -> {
            list.add((TournamentPhaseDTO) DTOHelper.convertToDto(data, TournamentPhaseDTO.class));
        });

        return list;
    }
}