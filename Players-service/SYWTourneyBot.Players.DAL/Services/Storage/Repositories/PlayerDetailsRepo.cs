using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Principal;
using System.Text;
using System.Threading.Tasks;
using SYWTourneyBot.Players.DAL.Services.Storage.HttpClients;
using SYWTourneyBot.Players.Exchange.DTO.Player;
using SYWTourneyBot.Players.Exchange.DTO.Player.Ranks;
using SYWTourneyBot.Players.Exchange.Repositories;

namespace SYWTourneyBot.Players.DAL.Services.Storage.Repositories
{
    public class PlayerDetailsRepo : IPlayerDetailsRepo
    {
        private readonly PlayersStorageServiceHttpClient _client;

        public PlayerDetailsRepo(PlayersStorageServiceHttpClient client)
        {
            _client = client;
        }

        public async ValueTask<IEnumerable<Player>> GetAll(int page, int limit)
        {
            return await _client.Get<IEnumerable<Player>>($"/api/players/all?{nameof(page)}={page}&{nameof(limit)}={limit}") ?? throw new ArgumentException($"Storage Service did not return an object of type '{nameof(IEnumerable<Player>)}'");
        }

        public async ValueTask<IEnumerable<Player>> Search(string search, string? by, int page, int limit)
        {
            return await _client.Get<IEnumerable<Player>>($"/api/players/search?{nameof(search)}={search}&{nameof(by)}={by}&{nameof(page)}={page}&{nameof(limit)}={limit}") ?? throw new ArgumentException($"Storage Service did not return an object of type '{nameof(IEnumerable<Player>)}'");
        }

        public ValueTask<Player?> GetById(string id)
        {
            return _client.Get<Player>($"/api/players/{id}");
        }

        public ValueTask<string?> GetIdByOtherId(string otherId)
        {
            return _client.Get<string>($"/api/players/id/{otherId}");
        }
    }
}
