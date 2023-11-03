using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SYWTourneyBot.Tournaments.Exchange.DTO.Tournament.Details
{
    public interface ITournamentCreationTime : IIdentifier
    {
        public DateTime? CreationTime { get; set; }
    }
}
