package com.cricketrivalries.api.controller;

import java.util.ArrayList;
import java.util.List;

import com.cricketrivalries.api.dto.PlayerPointsDTO;
import com.cricketrivalries.api.model.PlayerPoints;
import com.cricketrivalries.api.repository.PlayerPointsRepository;
import com.cricketrivalries.api.util.DTOHelper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api")
public class PlayerPointsController {

    @Autowired
    private PlayerPointsRepository playerPointsRepository;

    @GetMapping(path = "/playertotalpoints/{tournamentId}")
    public List<PlayerPointsDTO> getPlayersTotalPoints(@PathVariable Integer tournamentId) {
        List<PlayerPointsDTO> resultList = new ArrayList<>();
        List<PlayerPoints> playerPoints = playerPointsRepository.getTotalPlayerPoints(tournamentId);
        playerPoints.forEach(data -> {
            resultList.add((PlayerPointsDTO) DTOHelper.convertToDto(data, PlayerPointsDTO.class));
        });
        return resultList;
    }
}
