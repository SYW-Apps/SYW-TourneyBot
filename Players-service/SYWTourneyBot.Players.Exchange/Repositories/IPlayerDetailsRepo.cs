using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SYWTourneyBot.Players.Exchange.DTO.Player;

namespace SYWTourneyBot.Players.Exchange.Repositories
{
    public interface IPlayerDetailsRepo
    {
        public ValueTask<IEnumerable<Player>> GetAll(int page, int limit);

        public ValueTask<IEnumerable<Player>> Search(string search, string? by, int page, int limit);

        public ValueTask<Player?> GetById(string id);

        public ValueTask<string?> GetIdByOtherId(string otherId);
    }
}
