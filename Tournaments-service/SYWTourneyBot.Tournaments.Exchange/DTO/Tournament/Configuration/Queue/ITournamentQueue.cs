using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SYWTourneyBot.Tournaments.Exchange.DTO.Tournament.Configuration.Queue
{
    public interface ITournamentQueue : ITournamentQueueStartTime, ITournamentQueueEndTime, IIdentifier
    {
        public bool? QueueActive { get { return QueueStartTime < DateTime.Now && QueueEndTime > DateTime.Now; } }
    }
}
