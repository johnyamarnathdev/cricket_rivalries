package com.cricketrivalries.api.controller;

import java.util.ArrayList;
import java.util.List;

import com.cricketrivalries.api.dto.UserMatchPlayerPointsDTO;
import com.cricketrivalries.api.dto.UserMatchPointsDTO;
import com.cricketrivalries.api.model.UserMatchPlerysPoints;
import com.cricketrivalries.api.model.UserMatchPoints;
import com.cricketrivalries.api.repository.UserMatchPlayerPointsRepo;
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
    UserMatchPlayerPointsRepo userMatchPlayerPointsRepo;

    @Autowired
    UserMatchPointsRepo userMatchPointsRepo;

    @GetMapping(value = "/usermatchplayerpoints/{profileId}/{matchId}")
    public List<UserMatchPlayerPointsDTO> getUserMatchPlayerPoints(@PathVariable(value = "profileId") Long profileId,
            @PathVariable(value = "matchId") Long matchId) {
        List<UserMatchPlerysPoints> userMatchPoints = userMatchPlayerPointsRepo.findByProfileIdAndMatchId(profileId,
                matchId);
        List<UserMatchPlayerPointsDTO> dtos = new ArrayList<>();
        userMatchPoints.forEach(userMatchPoint -> {
            dtos.add((UserMatchPlayerPointsDTO) DTOHelper.convertToDto(userMatchPoint, UserMatchPlayerPointsDTO.class));
        });

        return dtos;
    }

    @GetMapping(value = "/usermatchpoints/{profileId}/{matchId}")
    public UserMatchPointsDTO getUserMatchPoints(@PathVariable Long profileId, @PathVariable Long matchId) {
        UserMatchPoints userMatchPoints = userMatchPointsRepo.findByProfileIdAndMatchId(profileId, matchId);

        if (userMatchPoints != null) {
            return (UserMatchPointsDTO) DTOHelper.convertToDto(userMatchPoints, UserMatchPointsDTO.class);
        } else {
            return null;
        }
        
    }
}
