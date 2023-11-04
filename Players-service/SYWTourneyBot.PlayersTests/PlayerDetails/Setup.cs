using Microsoft.AspNetCore.Mvc;
using RichardSzalay.MockHttp;
using System.Net.Http.Json;
using SYWTourneyBot.Players.Controllers;
using SYWTourneyBot.Players.Core;
using SYWTourneyBot.Players.DAL.Services.Storage.HttpClients;
using SYWTourneyBot.Players.DAL.Services.Storage.Repositories;
using SYWTourneyBot.Players.Exchange.DTO.Player;

namespace SYWTourneyBot.Players.Tests.PlayerDetails
{
    public partial class PlayerDetailsTests
    {
        private PlayerDetailsController CreateController(HttpClient mockedHttpClient)
        {
            return new PlayerDetailsController(new PlayerDetailsHandler(new PlayerDetailsRepo(new PlayersStorageServiceHttpClient(mockedHttpClient)))); ;
        }
    }
}