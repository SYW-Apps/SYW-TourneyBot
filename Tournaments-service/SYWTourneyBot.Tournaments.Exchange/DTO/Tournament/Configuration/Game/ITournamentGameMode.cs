using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SYWTourneyBot.Tournaments.Exchange.DTO.Tournament.Configuration.Bracket
{
    public interface ITournamentGameMode : ITournamentGame, IIdentifier
    {
        public string? GameMode { get; set; }
    }
}
