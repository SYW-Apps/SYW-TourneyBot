using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SYWTourneyBot.Tournaments.Exchange.DTO.Tournament.Details.Discord;

namespace SYWTourneyBot.Tournaments.Exchange.DTO.Tournament.Details
{
    internal interface ITournamentDetails : ITournamentOwner, ITournamentCreationTime, ITournamentTwitch, ITournamentDiscordChannel, ITournamentEnd, IIdentifier
    {
        public string? Name { get; set; }
        public string? Description { get; set; }
    }
}
