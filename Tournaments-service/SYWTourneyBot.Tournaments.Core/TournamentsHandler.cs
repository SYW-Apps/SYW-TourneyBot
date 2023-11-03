using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SYWTourneyBot.Tournaments.Exchange.DTO.Tournament;
using SYWTourneyBot.Tournaments.Exchange.DTO.Tournament.Configuration;
using SYWTourneyBot.Tournaments.Exchange.DTO.Tournament.Configuration.Bracket;
using SYWTourneyBot.Tournaments.Exchange.DTO.Tournament.Configuration.Queue;
using SYWTourneyBot.Tournaments.Exchange.DTO.Tournament.Details;
using SYWTourneyBot.Tournaments.Exchange.DTO.Tournament.Details.Discord;

namespace SYWTourneyBot.Tournaments.Core
{
    public class TournamentsHandler
    {
        public TournamentsHandler() { }

        public IEnumerable<Tournament> All(int page, int limit)
        {
            return new List<Tournament>();
        }

        public IEnumerable<Tournament> Search(string search, string? by, int page, int limit)
        {
            return new List<Tournament>();
        }
        
        public Tournament Get(string id)
        {
            return new Tournament();
        }

        public ITournamentDetails GetDetails(string id)
        {
            return new Tournament();
        }

        public ITournamentOwner GetOwner(string id)
        {
            return new Tournament();
        }

        public ITournamentCreationTime GetCreationTime(string id)
        {
            return new Tournament();
        }

        public ITournamentEnd GetEnd(string id)
        {
            return new Tournament();
        }

        public ITournamentEndTime GetEndTime(string id)
        {
            return new Tournament();
        }

        public ITournamentCancelled GetCancelled(string id)
        {
            return new Tournament();
        }

        public ITournamentTwitch GetTwitch(string id)
        {
            return new Tournament();
        }

        public ITournamentDiscord GetDiscord(string id)
        {
            return new Tournament();
        }

        public ITournamentDiscordChannel GetDiscordChannel(string id)
        {
            return new Tournament();
        }

        public ITournamentConfiguration GetConfiguration(string id)
        {
            return new Tournament();
        }

        public ITournamentBracket GetBracket(string id)
        {
            return new Tournament();
        }

        public ITournamentBracketSize GetBracketSize(string id)
        {
            return new Tournament();
        }

        public ITournamentBracketGenerationType GetBracketGenerationType(string id)
        {
            return new Tournament();
        }

        public ITournamentBracketStartTime GetBracketStartTime(string id)
        {
            return new Tournament();
        }

        public ITournamentGame GetGame(string id)
        {
            return new Tournament();
        }

        public ITournamentGameMode GetGameMode(string id)
        {
            return new Tournament();
        }

        public ITournamentQueue GetQueue(string id)
        {
            return new Tournament();
        }

        public ITournamentQueueStartTime GetQueueStartTime(string id)
        {
            return new Tournament();
        }

        public ITournamentQueueEndTime GetQueueEndTime(string id)
        {
            return new Tournament();
        }

        public ITournamentTeams GetTeams(string id)
        {
            return new Tournament();
        }

        public ITournamentTeamSize GetTeamSize(string id)
        {
            return new Tournament();
        }

        public ITournamentTeamGenerationType GetTeamGenerationType(string id)
        {
            return new Tournament();
        }

        public ITournamentAllowViewerTeams GetAllowViewerTeams(string id)
        {
            return new Tournament();
        }
    }
}
