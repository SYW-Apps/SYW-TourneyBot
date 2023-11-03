using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SYWTourneyBot.Tournaments.Exchange.DTO.Tournament.Details.Discord
{
    internal interface ITournamentDiscord : IIdentifier
    {
        public string? DiscordServerName { get; set; }
        public string? DiscordServerInviteLink { get; set; }
    }
}
