﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SYWTourneyBot.Tournaments.Exchange.DTO.Tournament.Configuration.Bracket
{
    public interface ITournamentTeamSize : IIdentifier
    {
        public int? TeamSize { get; set; }
    }
}