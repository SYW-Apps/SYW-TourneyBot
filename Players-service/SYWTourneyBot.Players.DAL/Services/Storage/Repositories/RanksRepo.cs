using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SYWTourneyBot.Players.Exchange.DTO.Player.Rank;
using SYWTourneyBot.Players.Exchange.DTO.Player.Ranks;

namespace SYWTourneyBot.Players.DAL.Services.Storage.Repositories
{
    public class RanksRepo
    {
        public RanksRepo()
        {
        
        }

        public Ranks GetRanks(string id)
        {
            return new Ranks();
        }

        public GameRank GetGameRank(string id)
        {
            return new GameRank();
        }

        public GameModeRank GetGameModeRank(string id)
        {
            return new GameModeRank();
        }
    }
}
