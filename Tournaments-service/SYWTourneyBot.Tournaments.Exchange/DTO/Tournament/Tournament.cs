using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SYWTourneyBot.Tournaments.Exchange.DTO.Tournament.Configuration;
using SYWTourneyBot.Tournaments.Exchange.DTO.Tournament.Details;

namespace SYWTourneyBot.Tournaments.Exchange.DTO.Tournament
{
    public class Tournament : ITournamentDetails, ITournamentConfiguration, IIdentifier
    {
        public string? Id { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }
        public string? OwnerId { get; set; }
        public DateTime? CreationTime { get; set; }
        public string? TwitchDisplayName { get; set; }
        public string? TwitchChannelName { get; set; }
        public string? DiscordChannel { get; set; }
        public string? DiscordServerName { get; set; }
        public string? DiscordServerInviteLink { get; set; }
        public bool? Ended { get; set; }
        public DateTime? EndTime { get; set; }
        public string? Actor { get; set; }
        public string? Reason { get; set; }
        public string? GameMode { get; set; }
        public string? Game { get; set; }
        public DateTime? QueueStartTime { get; set; }
        public DateTime? QueueEndTime { get; set; }
        public int? TeamSize { get; set; }
        public int? TeamGenerationType { get; set; }
        public bool? AllowViewerTeams { get; set; }
        public int? BracketSize { get; set; }
        public int? BracketGenerationType { get; set; }
        public DateTime? BracketStartTime { get; set; }
    }
}
