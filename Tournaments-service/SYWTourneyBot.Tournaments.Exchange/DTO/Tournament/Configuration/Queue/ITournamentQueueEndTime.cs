using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SYWTourneyBot.Tournaments.Exchange.DTO.Tournament.Configuration.Queue
{
    public interface ITournamentQueueEndTime : IIdentifier
    {
        public DateTime? QueueEndTime { get; set; }
    }
}
