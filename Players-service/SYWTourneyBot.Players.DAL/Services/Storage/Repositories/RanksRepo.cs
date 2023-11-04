using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SYWTourneyBot.Players.DAL.Services.Storage.HttpClients;
using SYWTourneyBot.Players.Exchange.DTO.Player.Ranks;
using SYWTourneyBot.Players.Exchange.Repositories;

namespace SYWTourneyBot.Players.DAL.Services.Storage.Repositories
{
    public class RanksRepo : IRanksRepo
    {
        private readonly PlayersStorageServiceHttpClient _client;

        public RanksRepo(PlayersStorageServiceHttpClient client)
        {
            _client = client;
        }

        public ValueTask<Ranks?> GetRanks(string id)
        {
            return _client.Get<Ranks>($"/api/players/ranks/{id}");
        }

        public ValueTask<GameRank?> GetGameRank(string id, string game)
        {
            return _client.Get<GameRank>($"/api/players/ranks/{id}/{game}");
        }

        public ValueTask<GameModeRank?> GetGameModeRank(string id, string game, string gamemode)
        {
            return _client.Get<GameModeRank>($"/api/players/ranks/{id}/{game}/{gamemode}");
        }
    }
}
