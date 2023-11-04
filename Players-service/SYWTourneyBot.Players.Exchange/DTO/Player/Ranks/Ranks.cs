using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SYWTourneyBot.Players.Exchange.DTO.Player.Ranks;

namespace SYWTourneyBot.Players.Exchange.DTO.Player.Ranks
{
    public class Ranks
    {
        public IDictionary<string, GameRank> Games { get; set; } = new Dictionary<string, GameRank>();
    }
}
