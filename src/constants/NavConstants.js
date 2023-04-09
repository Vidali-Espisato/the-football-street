import PremierLeagueIcon from '../assets/PremierLeague.png'
import BundesLigaIcon from '../assets/BundesLiga.png'
import SerieAIcon from '../assets/SerieA.png'
import Ligue1Icon from '../assets/Ligue1.png'
import LaLigaIcon from '../assets/LaLiga.png'
import EFLChampionshipIcon from '../assets/EFLChampionship.png'
import UEFAChampionsLeagueIcon from '../assets/UEFAChampionsLeague.png'
import CopaLibertadoresIcon from '../assets/CopaLibertadores.png'
import CampeionatoBrasileiroIcon from '../assets/CampeionatoBrasileiro.png'


const NavOptions = [
    {
        title: "Home",
        key: "home",
        path: "/home"
    },
    // {
    //     title: "Live Scores",
    //     key: "liveScores",
    //     path: "/live-scores"
    // },
    // {
    //     title: "Transfers",
    //     key: "transfers",
    //     path: "/transfers"
    // },
    {
        title: "Leagues",
        key: "leagues",
        path: "/leagues",
        subItems: [
            {
                title: "Premier League",
                key: "premierLeague",
                path: "/premier-league",
                leagueKey: "PL",
                leagueIcon: PremierLeagueIcon
            }, {
                title: "BundesLiga",
                key: "bundesLiga",
                path: "/bundes-liga",
                leagueKey: "BL1",
                leagueIcon: BundesLigaIcon
            },{
                title: "Serie A",
                key: "serieA",
                path: "/serie-A",
                leagueKey: "SA  ",
                leagueIcon: SerieAIcon
            },{
                title: "Ligue 1",
                key: "ligue1",
                path: "/ligue-1",
                leagueKey: "FL1",
                leagueIcon: Ligue1Icon
            },{
                title: "La Liga - Primera División",
                key: "laLigaPrimeraDivision",
                path: "/la-liga-pd",
                leagueKey: "PD",
                leagueIcon: LaLigaIcon
            },{
                title: "EFL Championship",
                key: "eflChampionship",
                path: "/efl-championship",
                leagueKey: "ELC",
                leagueIcon: EFLChampionshipIcon
            // },{
            //     title: "UEFA Champions League",
            //     key: "uefaChampionsLeague",
            //     path: "/uefa-champions-league",
            //     leagueKey: "CL",
            //     leagueIcon: UEFAChampionsLeagueIcon
            },{
                title: "Copa Libertadores",
                key: "copaLibertadores",
                path: "/copa-libertadores",
                leagueKey: "CLI",
                leagueIcon: CopaLibertadoresIcon
            },{
                title: "Campeonato Brasileiro Série A",
                key: "campeionatoBrasileiro",
                path: "/campeonato-brasileiro",
                leagueKey: "BSA",
                leagueIcon: CampeionatoBrasileiroIcon
            },
        ]
    }
]

export { NavOptions }