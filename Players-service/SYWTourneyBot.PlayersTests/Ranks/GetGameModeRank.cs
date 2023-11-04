using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Json;
using System.Text;
using System.Threading.Tasks;
using SYWTourneyBot.Players.Controllers;
using SYWTourneyBot.Players.Exchange.DTO.Player;
using SYWTourneyBot.Players.Exchange.DTO.Player.Ranks;

namespace SYWTourneyBot.Players.Tests.Ranks
{
    public partial class RanksTests
    {
        private Func<Task<HttpResponseMessage>> RespondToGetGameModeRankRequest(IEnumerable<Player> database, string id, string game, string gamemode)
        {
            return () => Task.FromResult(new HttpResponseMessage()
            {
                Content = JsonContent.Create(database.FirstOrDefault(x => x.SYWAccountsId == id)?.Ranks?.Games[game].GameModes[gamemode]),
            });
        }

        [Fact]
        public async Task GetGameModeRank_Id1_Returns1PlayerWithId1()
        {
            const string id = "1";
            const string game = "Rocket-League";
            const string gamemode = "1v1";
            IEnumerable<Player> database = Enumerable.Repeat(new Player(), 2).Select((p, index) => { p.SYWAccountsId = index.ToString(); p.Ranks = new Exchange.DTO.Player.Ranks.Ranks() { Games = new Dictionary<string, GameRank>() { { game, new GameRank() { GameId = game, GameName = game, GameModes = new Dictionary<string, GameModeRank>() { { gamemode, new GameModeRank() { GameModeId = gamemode, GameModeName = gamemode, RankName = "SSL", MMR = 2134, LastUpdatedTime = DateTime.Today.AddDays(-index) } } } } } } }; return p; });
            HttpClient mockedHttpClient = Setup.CreateMockedHttpClientWithMockedRequest(HttpMethod.Get, $"/api/players/ranks/{id}/{game}/{gamemode}",
                RespondToGetGameModeRankRequest(database, id, game, gamemode));
            RanksController controller = CreateController(mockedHttpClient);

            JsonResult? response = await controller.GetGameModeRank(id, game, gamemode) as JsonResult;

            Assert.NotNull(response);
            GameModeRank? result = response.Value as GameModeRank;
            Assert.NotNull(result);
            Assert.Equal(database.ElementAt(1).Ranks?.Games[game].GameModes[gamemode].GameModeId, result.GameModeId);
            Assert.Equal(database.ElementAt(1).Ranks?.Games[game].GameModes[gamemode].GameModeName, result.GameModeName);
            Assert.Equal(database.ElementAt(1).Ranks?.Games[game].GameModes[gamemode].MMR, result.MMR);
            Assert.Equal(database.ElementAt(1).Ranks?.Games[game].GameModes[gamemode].RankName, result.RankName);
            Assert.Equal(database.ElementAt(1).Ranks?.Games[game].GameModes[gamemode].LastUpdatedTime, result.LastUpdatedTime);
        }

        [Fact]
        public async Task GetGameModeRank_Id25_ReturnsNothing()
        {
            const string id = "25";
            const string game = "Rocket-League";
            const string gamemode = "1v1";
            IEnumerable<Player> database = Enumerable.Repeat(new Player(), 2).Select((p, index) => { p.SYWAccountsId = index.ToString(); p.Ranks = new Exchange.DTO.Player.Ranks.Ranks() { Games = new Dictionary<string, GameRank>() { { game, new GameRank() { GameId = game, GameName = game, GameModes = new Dictionary<string, GameModeRank>() { { gamemode, new GameModeRank() { GameModeId = gamemode, GameModeName = gamemode, RankName = "SSL", MMR = 2134, LastUpdatedTime = DateTime.Today.AddDays(-index) } } } } } } }; return p; });
            HttpClient mockedHttpClient = Setup.CreateMockedHttpClientWithMockedRequest(HttpMethod.Get, $"/api/players/ranks/{id}/{game}/{gamemode}",
                RespondToGetGameModeRankRequest(database, id, game, gamemode));
            RanksController controller = CreateController(mockedHttpClient);

            JsonResult? response = await controller.GetGameModeRank(id, game, gamemode) as JsonResult;

            Assert.NotNull(response);
            GameModeRank? result = response.Value as GameModeRank;
            Assert.Null(result);
        }
    }
}
