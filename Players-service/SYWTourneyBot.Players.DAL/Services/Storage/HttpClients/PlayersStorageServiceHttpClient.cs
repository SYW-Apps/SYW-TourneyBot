using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SYW.AspNetCore.HttpClients;

namespace SYWTourneyBot.Players.DAL.Services.Storage.HttpClients
{
    public class PlayersStorageServiceHttpClient : JsonHttpClient
    {
        public PlayersStorageServiceHttpClient(HttpClient client) : base(client)
        {
        }
    }
}
