package com.cricketrivalries.api.controller;

import java.util.ArrayList;
import java.util.List;

import com.cricketrivalries.api.dto.UserMatchPointDTO;
import com.cricketrivalries.api.model.UserMatchPoint;
import com.cricketrivalries.api.repository.UserMatchPointsRepo;
import com.cricketrivalries.api.util.DTOHelper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * UserMatchController
 */
@RestController
@RequestMapping(path = "/api")
public class UserMatchController {

    @Autowired
    UserMatchPointsRepo userMatchPointsRepo;

    @GetMapping(value = "/usermatch/{profileId}/{matchId}")
    public List<UserMatchPointDTO> getUserMatchPoints(@PathVariable(value = "profileId") Long profileId,
            @PathVariable(value = "matchId") Long matchId) {
        List<UserMatchPoint> userMatchPoints = userMatchPointsRepo.findByProfileIdAndMatchId(profileId, matchId);
        List<UserMatchPointDTO> dtos = new ArrayList<>();
        userMatchPoints.forEach(userMatchPoint -> {
            dtos.add((UserMatchPointDTO) DTOHelper.convertToDto(userMatchPoint, UserMatchPointDTO.class));
        });

        return dtos;
    }
}
