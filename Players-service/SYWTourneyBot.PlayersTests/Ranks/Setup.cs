using Microsoft.AspNetCore.Mvc;
using RichardSzalay.MockHttp;
using System.Net.Http.Json;
using SYWTourneyBot.Players.Controllers;
using SYWTourneyBot.Players.Core;
using SYWTourneyBot.Players.DAL.Services.Storage.HttpClients;
using SYWTourneyBot.Players.DAL.Services.Storage.Repositories;
using SYWTourneyBot.Players.Exchange.DTO.Player;

namespace SYWTourneyBot.Players.Tests.Ranks
{
    public partial class RanksTests
    {
        private RanksController CreateController(HttpClient mockedHttpClient)
        {
            return new RanksController(new RanksHandler(new RanksRepo(new PlayersStorageServiceHttpClient(mockedHttpClient)))); ;
        }
    }
}