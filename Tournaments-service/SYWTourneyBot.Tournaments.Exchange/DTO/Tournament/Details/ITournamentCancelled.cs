using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SYWTourneyBot.Tournaments.Exchange.DTO.Tournament.Details
{
    public interface ITournamentCancelled : IIdentifier
    {
        public string? Actor { get; set; }
        public string? Reason { get; set; }
    }
}
