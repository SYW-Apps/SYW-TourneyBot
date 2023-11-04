using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SYWTourneyBot.Players.Exchange.DTO.Player.Ranks;
using SYWTourneyBot.Players.Exchange.Repositories;

namespace SYWTourneyBot.Players.Core
{
    public class RanksHandler
    {
        private readonly IRanksRepo _repo;

        public RanksHandler(IRanksRepo repo)
        {
            _repo = repo;
        }

        public ValueTask<Ranks?> GetRanks(string id)
        {
            return _repo.GetRanks(id);
        }

        public ValueTask<GameRank?> GetGameRank(string id, string game)
        {
            return _repo.GetGameRank(id, game);
        }

        public ValueTask<GameModeRank?> GetGameModeRank(string id, string game, string gamemode)
        {
            return _repo.GetGameModeRank(id, game, gamemode);
        }
    }
}
