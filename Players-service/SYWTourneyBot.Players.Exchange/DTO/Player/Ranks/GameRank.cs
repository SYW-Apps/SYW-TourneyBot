using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SYWTourneyBot.Players.Exchange.DTO.Player.Ranks
{
    public class GameRank
    {
        public string? GameId { get; set; }
        public string? GameName { get; set; }
        public IDictionary<string, GameRank> Games { get; set; } = new Dictionary<string, GameRank>();
    }
}
