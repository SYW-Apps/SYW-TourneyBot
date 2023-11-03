using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SYWTourneyBot.Tournaments.Exchange.DTO.Tournament.Details.Discord
{
    internal interface ITournamentTwitch : IIdentifier
    {
        public string? TwitchDisplayName { get; set; }
        public string? TwitchChannelName { get; set; }
    }
}
