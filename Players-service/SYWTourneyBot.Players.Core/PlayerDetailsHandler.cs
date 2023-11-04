using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SYWTourneyBot.Players.Exchange.DTO.Player;
using SYWTourneyBot.Players.Exchange.Repositories;

namespace SYWTourneyBot.Players.Core
{
    public class PlayerDetailsHandler
    {
        private readonly IPlayerDetailsRepo _repo;

        public PlayerDetailsHandler(IPlayerDetailsRepo repo)
        {
            _repo = repo;
        }

        public ValueTask<IEnumerable<Player>> GetAll(int page, int limit)
        {
            return _repo.GetAll(page, limit);
        }

        public ValueTask<IEnumerable<Player>> Search(string search, string? by, int page, int limit)
        {
            return _repo.Search(search, by, page, limit);
        }

        public ValueTask<Player?> GetById(string id)
        {
            return _repo.GetById(id);
        }

        public ValueTask<string?> GetIdByOtherId(string otherId)
        {
            return _repo.GetIdByOtherId(otherId);
        }
    }
}
