using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SYWTourneyBot.Players.Exchange.DTO.Player
{
    public class Player
    {
        public string? SYWAccountsId { get; set; }

        public string? Name { get; set; }
        public string? Biography { get; set; }

        public string? TwitchId { get; set; }
        public string? TwitchName { get; set; }
        public string? TwitchDisplayName { get; set; }

        public string? DiscordId { get; set; }
        public string? DiscordName { get; set; }

        public string? EpicGamesId { get; set; }
        public string? EpicGamesName { get; set; }

        public string? SteamId { get; set; }
        public string? SteamName { get; set; }

        public string? PlayStationId { get; set; }
        public string? PlayStationName { get; set; }

        public string? XboxId { get; set; }
        public string? XboxName { get; set; }

        public string? NintendoSwitchId { get; set; }
        public string? NintendoSwitchName { get; set; }

        public Ranks.Ranks? Ranks { get; set; }
    }
}
