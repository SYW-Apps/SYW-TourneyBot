using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SYWTourneyBot.Tournaments.Exchange.DTO.Tournament.Configuration.Bracket
{
    public interface ITournamentBracketStartTime : IIdentifier
    {
        public DateTime? BracketStartTime { get; set; }
        public bool? BracketStarted { get { return BracketStartTime < DateTime.Now; } }
    }
}
