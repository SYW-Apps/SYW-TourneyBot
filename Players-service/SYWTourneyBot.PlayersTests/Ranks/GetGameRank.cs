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
        private Func<Task<HttpResponseMessage>> RespondToGetGameRankRequest(IEnumerable<Player> database, string id, string game)
        {
            return () => Task.FromResult(new HttpResponseMessage()
            {
                Content = JsonContent.Create(database.FirstOrDefault(x => x.SYWAccountsId == id)?.Ranks?.Games[game]),
            });
        }

        [Fact]
        public async Task GetGameRank_Id1_Returns1PlayerWithId1()
        {
            const string id = "1";
            const string game = "Rocket-League";
            const string gamemode = "1v1";
            IEnumerable<Player> database = Enumerable.Repeat(new Player(), 2).Select((p, index) => { p.SYWAccountsId = index.ToString(); p.Ranks = new Exchange.DTO.Player.Ranks.Ranks() { Games = new Dictionary<string, GameRank>() { { game, new GameRank() { GameId = game, GameName = game, GameModes = new Dictionary<string, GameModeRank>() { { gamemode, new GameModeRank() { GameModeId = gamemode, GameModeName = gamemode, RankName = "SSL", MMR = 2134, LastUpdatedTime = DateTime.Today.AddDays(-index) } } } } } } }; return p; });
            HttpClient mockedHttpClient = Setup.CreateMockedHttpClientWithMockedRequest(HttpMethod.Get, $"/api/players/ranks/{id}/{game}",
                RespondToGetGameRankRequest(database, id, game));
            RanksController controller = CreateController(mockedHttpClient);

            JsonResult? response = await controller.GetGameRank(id, game) as JsonResult;

            Assert.NotNull(response);
            GameRank? result = response.Value as GameRank;
            Assert.NotNull(result);
            Assert.Equal(database.ElementAt(1).Ranks?.Games[game].GameId, result.GameId);
            Assert.Equal(database.ElementAt(1).Ranks?.Games[game].GameName, result.GameName);
            Assert.NotEmpty(result.GameModes);
            Assert.Collection(result.GameModes,
                (gm) =>
                {
                    Assert.Equal(database.ElementAt(1).Ranks?.Games[game].GameModes[gamemode].GameModeId, gm.Value.GameModeId);
                    Assert.Equal(database.ElementAt(1).Ranks?.Games[game].GameModes[gamemode].GameModeName, gm.Value.GameModeName);
                    Assert.Equal(database.ElementAt(1).Ranks?.Games[game].GameModes[gamemode].MMR, gm.Value.MMR);
                    Assert.Equal(database.ElementAt(1).Ranks?.Games[game].GameModes[gamemode].RankName, gm.Value.RankName);
                    Assert.Equal(database.ElementAt(1).Ranks?.Games[game].GameModes[gamemode].LastUpdatedTime, gm.Value.LastUpdatedTime);
                }
            );
        }

        [Fact]
        public async Task GetGameRank_Id25_ReturnsNothing()
        {
            const string id = "25";
            const string game = "Rocket-League";
            const string gamemode = "1v1";
            IEnumerable<Player> database = Enumerable.Repeat(new Player(), 2).Select((p, index) => { p.SYWAccountsId = index.ToString(); p.Ranks = new Exchange.DTO.Player.Ranks.Ranks() { Games = new Dictionary<string, GameRank>() { { game, new GameRank() { GameId = game, GameName = game, GameModes = new Dictionary<string, GameModeRank>() { { gamemode, new GameModeRank() { GameModeId = gamemode, GameModeName = gamemode, RankName = "SSL", MMR = 2134, LastUpdatedTime = DateTime.Today.AddDays(-index) } } } } } } }; return p; });
            HttpClient mockedHttpClient = Setup.CreateMockedHttpClientWithMockedRequest(HttpMethod.Get, $"/api/players/ranks/{id}/{game}",
                RespondToGetGameRankRequest(database, id, game));
            RanksController controller = CreateController(mockedHttpClient);

            JsonResult? response = await controller.GetGameRank(id, game) as JsonResult;

            Assert.NotNull(response);
            GameRank? result = response.Value as GameRank;
            Assert.Null(result);
        }
    }
}
