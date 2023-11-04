using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SYWTourneyBot.Players.Exchange.DTO.Player;
using SYWTourneyBot.Players.Exchange.DTO.Player.Rank;
using SYWTourneyBot.Players.Exchange.DTO.Player.Ranks;

namespace SYWTourneyBot.Players.DAL.Services.Storage.Repositories
{
    public class PlayerDetailsRepo
    {
        public PlayerDetailsRepo()
        {
        
        }

        public IEnumerable<Player> GetAll(int page, int limit)
        {
            return new List<Player>();
        }

        public IEnumerable<Player> Search(string search, string? by, int page, int limit)
        {
            return new List<Player>();
        }

        public Player GetById(string id)
        {
            return new Player();
        }

        public string GetIdByOtherId(string otherId)
        {
            return string.Empty;
        }
    }
}
