using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Json;
using System.Text;
using System.Threading.Tasks;
using SYWTourneyBot.Players.Controllers;
using SYWTourneyBot.Players.Exchange.DTO.Player;

namespace SYWTourneyBot.Players.Tests.PlayerDetails
{
    public partial class PlayerDetailsTests
    {
        private Func<Task<HttpResponseMessage>> RespondToSearchRequest(IEnumerable<Player> database, string search, string? by, int page, int limit)
        {
            return () => Task.FromResult(new HttpResponseMessage()
            {
                Content = JsonContent.Create(database.Where(x => string.IsNullOrEmpty(by) ?
                    (x.SYWAccountsId != null && x.SYWAccountsId.ToLower().Contains(search.ToLower())) ||
                    (x.TwitchName != null && x.TwitchName.ToLower().Contains(search.ToLower())) ||
                    (x.TwitchDisplayName != null && x.TwitchDisplayName.ToLower().Contains(search.ToLower())) ||
                    (x.DiscordName != null && x.DiscordName.ToLower().Contains(search.ToLower())) ||
                    (x.EpicGamesName != null && x.EpicGamesName.ToLower().Contains(search.ToLower())) ||
                    (x.SteamName != null && x.SteamName.ToLower().Contains(search.ToLower())) ||
                    (x.PlayStationName != null && x.PlayStationName.ToLower().Contains(search.ToLower())) ||
                    (x.XboxName != null && x.XboxName.ToLower().Contains(search.ToLower())) ||
                    (x.NintendoSwitchName != null && x.NintendoSwitchName.ToLower().Contains(search.ToLower()))
                    : false)
                    .Skip((page - 1) * limit).Take(limit)),
            });
        }

        [Fact]
        public async Task Search_WithSearch1_AndPage1AndLimit10_Returns1Result()
        {
            const string search = "1";
            const string? by = null;
            const int page = 1;
            const int limit = 10;
            IEnumerable<Player> database = Enumerable.Repeat(new Player(), 9).Select((p, index) => { p.SYWAccountsId = index.ToString(); return p; });
            HttpClient mockedHttpClient = Setup.CreateMockedHttpClientWithMockedRequest(HttpMethod.Get, $"/api/players/search?{nameof(search)}={search}&{nameof(by)}={by}&{nameof(page)}={page}&{nameof(limit)}={limit}",
                RespondToSearchRequest(database, search, by, page, limit));
            PlayerDetailsController controller = CreateController(mockedHttpClient);

            JsonResult? response = await controller.Search(search, by, page, limit) as JsonResult;

            Assert.NotNull(response);
            IEnumerable<Player>? results = response.Value as IEnumerable<Player>;
            Assert.NotNull(results);
            Assert.Collection(results,
                (result) => Assert.Equal(database.ElementAt(1).SYWAccountsId, result.SYWAccountsId)
            );
        }

        [Fact]
        public async Task Search_WithSearch2_AndPage1AndLimit10_Returns1Result()
        {
            const string search = "2";
            const string? by = null;
            const int page = 1;
            const int limit = 10;
            IEnumerable<Player> database = Enumerable.Repeat(new Player(), 9).Select((p, index) => { p.SYWAccountsId = index.ToString(); return p; });
            HttpClient mockedHttpClient = Setup.CreateMockedHttpClientWithMockedRequest(HttpMethod.Get, $"/api/players/search?{nameof(search)}={search}&{nameof(by)}={by}&{nameof(page)}={page}&{nameof(limit)}={limit}",
                RespondToSearchRequest(database, search, by, page, limit));
            PlayerDetailsController controller = CreateController(mockedHttpClient);

            JsonResult? response = await controller.Search(search, by, page, limit) as JsonResult;

            Assert.NotNull(response);
            IEnumerable<Player>? results = response.Value as IEnumerable<Player>;
            Assert.NotNull(results);
            Assert.Collection(results,
                (result) => Assert.Equal(database.ElementAt(2).SYWAccountsId, result.SYWAccountsId)
            );
        }

        [Fact]
        public async Task Search_WithSearchQ_AndPage1AndLimit10_ReturnsNothing()
        {
            const string search = "Q";
            const string? by = null;
            const int page = 1;
            const int limit = 10;
            IEnumerable<Player> database = Enumerable.Repeat(new Player(), 15).Select((p, index) => Setup.GeneratePlayer(index, p));
            HttpClient mockedHttpClient = Setup.CreateMockedHttpClientWithMockedRequest(HttpMethod.Get, $"/api/players/search?{nameof(search)}={search}&{nameof(by)}={by}&{nameof(page)}={page}&{nameof(limit)}={limit}",
                RespondToSearchRequest(database, search, by, page, limit));
            PlayerDetailsController controller = CreateController(mockedHttpClient);

            JsonResult? response = await controller.Search(search, by, page, limit) as JsonResult;

            Assert.NotNull(response);
            IEnumerable<Player>? results = response.Value as IEnumerable<Player>;
            Assert.NotNull(results);
            Assert.Empty(results);
        }

        [Fact]
        public async Task Search_WithSearch2_AndPage1AndLimit10_Returns2Results()
        {
            const string search = "2";
            const string? by = null;
            const int page = 1;
            const int limit = 10;
            IEnumerable<Player> database = Enumerable.Repeat(new Player(), 15).Select((p, index) => { p.SYWAccountsId = index.ToString(); return p; });
            HttpClient mockedHttpClient = Setup.CreateMockedHttpClientWithMockedRequest(HttpMethod.Get, $"/api/players/search?{nameof(search)}={search}&{nameof(by)}={by}&{nameof(page)}={page}&{nameof(limit)}={limit}",
                RespondToSearchRequest(database, search, by, page, limit));
            PlayerDetailsController controller = CreateController(mockedHttpClient);

            JsonResult? response = await controller.Search(search, by, page, limit) as JsonResult;

            Assert.NotNull(response);
            IEnumerable<Player>? results = response.Value as IEnumerable<Player>;
            Assert.NotNull(results);
            Assert.Collection(results,
                (result) => Assert.Equal(database.ElementAt(2).SYWAccountsId, result.SYWAccountsId),
                (result) => Assert.Equal(database.ElementAt(12).SYWAccountsId, result.SYWAccountsId)
            );
        }

        [Fact]
        public async Task Search_WithSearch20_AndPage1AndLimit10_ReturnsNothing()
        {
            const string search = "20";
            const string? by = null;
            const int page = 1;
            const int limit = 10;
            IEnumerable<Player> database = Enumerable.Repeat(new Player(), 15).Select((p, index) => { p.SYWAccountsId = index.ToString(); return p; });
            HttpClient mockedHttpClient = Setup.CreateMockedHttpClientWithMockedRequest(HttpMethod.Get, $"/api/players/search?{nameof(search)}={search}&{nameof(by)}={by}&{nameof(page)}={page}&{nameof(limit)}={limit}",
                RespondToSearchRequest(database, search, by, page, limit));
            PlayerDetailsController controller = CreateController(mockedHttpClient);

            JsonResult? response = await controller.Search(search, by, page, limit) as JsonResult;

            Assert.NotNull(response);
            IEnumerable<Player>? results = response.Value as IEnumerable<Player>;
            Assert.NotNull(results);
            Assert.Empty(results);
        }
    }
}
