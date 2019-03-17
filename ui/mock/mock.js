module.exports = function () {
    return {
        "tournamentmatches": require('./tournamentmatchesmock.json'),
        "usertournamentpoints": require('./user-tournament-points.mock.json'),
        "overalluserpoints": require('./overall-user-points.mock.json'),
        "phasepoints": require('./phase-user-points.mock.json'),
        "tournamentphases": require('./tournament-phases.mock.json'),
        "tournaments": require('./tournaments.mock.json'),
        "players": require('./players-list.mock.json'),
        "usermatch": require('./user-match-players.mock.json'),
        "usermatchpoints": require('./user-match-points.mock.json'),
        "usertransfers": require('./user-transfers.mock.json')
    }
}