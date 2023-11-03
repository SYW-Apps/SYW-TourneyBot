using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SYWTourneyBot.Tournaments.Exchange.DTO.Tournament;

namespace SYWTourneyBot.Tournaments.DAL.Services.Storage.Repositories
{
    public class AvailableTournamentsRepo
    {
        public AvailableTournamentsRepo() { }

        public IEnumerable<Tournament> All(int page, int limit)
        {
            return new List<Tournament>();
        }

        public IEnumerable<Tournament> Search(string search, string? by, int page, int limit)
        {
            return new List<Tournament>();
        }
    }
}
