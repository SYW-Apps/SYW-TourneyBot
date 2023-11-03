using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SYWTourneyBot.Tournaments.Exchange.DTO.Tournament.Details.Discord
{
    public interface ITournamentDiscordChannel : ITournamentDiscord, IIdentifier
    {
        public string? DiscordChannel { get; set; }
    }
}
