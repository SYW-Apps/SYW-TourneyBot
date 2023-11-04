using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SYWTourneyBot.Players.Exchange.DTO.Player.Ranks
{
    public class GameModeRank
    {
        public string? GameModeId { get; set; }
        public string? GameModeName { get; set; }

        public float? MMR { get; set; }
        public string? RankName { get; set; }
    }
}
