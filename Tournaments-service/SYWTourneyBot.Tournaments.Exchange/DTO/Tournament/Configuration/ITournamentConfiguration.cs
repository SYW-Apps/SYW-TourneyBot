using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SYWTourneyBot.Tournaments.Exchange.DTO.Tournament.Configuration.Bracket;
using SYWTourneyBot.Tournaments.Exchange.DTO.Tournament.Configuration.Queue;

namespace SYWTourneyBot.Tournaments.Exchange.DTO.Tournament.Configuration
{
    public interface ITournamentConfiguration : ITournamentGameMode, ITournamentQueue, ITournamentTeams, ITournamentBracket, IIdentifier
    {
    }
}
