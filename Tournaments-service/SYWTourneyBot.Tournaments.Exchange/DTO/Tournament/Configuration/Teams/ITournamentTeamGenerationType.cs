using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SYWTourneyBot.Tournaments.Exchange.DTO.Tournament.Configuration.Bracket
{
    public interface ITournamentTeamGenerationType : IIdentifier
    {
        public int? TeamGenerationType { get; set; }
    }
}
