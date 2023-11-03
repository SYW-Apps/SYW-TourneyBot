using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SYWTourneyBot.Tournaments.Exchange.DTO.Tournament.Configuration.Queue
{
    public interface ITournamentQueueStartTime : IIdentifier
    {
        public DateTime? QueueStartTime { get; set; }
    }
}
