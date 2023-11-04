using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SYWTourneyBot.Players.Exchange.DTO.Player.Ranks;

namespace SYWTourneyBot.Players.Exchange.Repositories
{
    public interface IRanksRepo
    {
        public ValueTask<Ranks?> GetRanks(string id);

        public ValueTask<GameRank?> GetGameRank(string id, string game);

        public ValueTask<GameModeRank?> GetGameModeRank(string id, string game, string gamemode);
    }
}
