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
        private Func<Task<HttpResponseMessage>> RespondToGetAllRequest(IEnumerable<Player> database, int page, int limit)
        {
            return () => Task.FromResult(new HttpResponseMessage()
            {
                Content = JsonContent.Create(database.Skip((page - 1) * limit).Take(limit)),
            });
        }

        [Fact]
        public async Task GetAll_WithPage1AndLimit10_ReturnsFirst10Results()
        {
            const int page = 1;
            const int limit = 10;
            IEnumerable<Player> database = Enumerable.Repeat(new Player(), 15).Select((p, index) => Setup.GeneratePlayer(index, p));
            HttpClient mockedHttpClient = Setup.CreateMockedHttpClientWithMockedRequest(HttpMethod.Get, $"/api/players/all?{nameof(page)}={page}&{nameof(limit)}={limit}",
                RespondToGetAllRequest(database, page, limit));
            PlayerDetailsController controller = CreateController(mockedHttpClient);

            JsonResult? response = await controller.All(page, limit) as JsonResult;

            Assert.NotNull(response);
            IEnumerable<Player>? results = response.Value as IEnumerable<Player>;
            Assert.NotNull(results);
            Assert.Collection(results,
                (result) => Assert.Equal(database.ElementAt(0).SYWAccountsId, result.SYWAccountsId),
                (result) => Assert.Equal(database.ElementAt(1).SYWAccountsId, result.SYWAccountsId),
                (result) => Assert.Equal(database.ElementAt(2).SYWAccountsId, result.SYWAccountsId),
                (result) => Assert.Equal(database.ElementAt(3).SYWAccountsId, result.SYWAccountsId),
                (result) => Assert.Equal(database.ElementAt(4).SYWAccountsId, result.SYWAccountsId),
                (result) => Assert.Equal(database.ElementAt(5).SYWAccountsId, result.SYWAccountsId),
                (result) => Assert.Equal(database.ElementAt(6).SYWAccountsId, result.SYWAccountsId),
                (result) => Assert.Equal(database.ElementAt(7).SYWAccountsId, result.SYWAccountsId),
                (result) => Assert.Equal(database.ElementAt(8).SYWAccountsId, result.SYWAccountsId),
                (result) => Assert.Equal(database.ElementAt(9).SYWAccountsId, result.SYWAccountsId)
            );
        }

        [Fact]
        public async Task GetAll_WithPage2AndLimit10_ReturnsLast5Results()
        {
            const int page = 2;
            const int limit = 10;
            IEnumerable<Player> database = Enumerable.Repeat(new Player(), 15).Select((p, index) => Setup.GeneratePlayer(index, p));
            HttpClient mockedHttpClient = Setup.CreateMockedHttpClientWithMockedRequest(HttpMethod.Get, $"/api/players/all?{nameof(page)}={page}&{nameof(limit)}={limit}",
                RespondToGetAllRequest(database, page, limit));
            PlayerDetailsController controller = CreateController(mockedHttpClient);

            JsonResult? response = await controller.All(page, limit) as JsonResult;

            Assert.NotNull(response);
            IEnumerable<Player>? results = response.Value as IEnumerable<Player>;
            Assert.NotNull(results);
            Assert.Collection(results,
                (result) => Assert.Equal(database.ElementAt(10).SYWAccountsId, result.SYWAccountsId),
                (result) => Assert.Equal(database.ElementAt(11).SYWAccountsId, result.SYWAccountsId),
                (result) => Assert.Equal(database.ElementAt(12).SYWAccountsId, result.SYWAccountsId),
                (result) => Assert.Equal(database.ElementAt(13).SYWAccountsId, result.SYWAccountsId),
                (result) => Assert.Equal(database.ElementAt(14).SYWAccountsId, result.SYWAccountsId)
            );
        }

        [Fact]
        public async Task GetAll_WithPage4AndLimit3_Returns3Results()
        {
            const int page = 3;
            const int limit = 3;
            IEnumerable<Player> database = Enumerable.Repeat(new Player(), 15).Select((p, index) => Setup.GeneratePlayer(index, p));
            HttpClient mockedHttpClient = Setup.CreateMockedHttpClientWithMockedRequest(HttpMethod.Get, $"/api/players/all?{nameof(page)}={page}&{nameof(limit)}={limit}",
                RespondToGetAllRequest(database, page, limit));
            PlayerDetailsController controller = CreateController(mockedHttpClient);

            JsonResult? response = await controller.All(page, limit) as JsonResult;

            Assert.NotNull(response);
            IEnumerable<Player>? results = response.Value as IEnumerable<Player>;
            Assert.NotNull(results);
            Assert.Collection(results,
                (result) => Assert.Equal(database.ElementAt(6).SYWAccountsId, result.SYWAccountsId),
                (result) => Assert.Equal(database.ElementAt(7).SYWAccountsId, result.SYWAccountsId),
                (result) => Assert.Equal(database.ElementAt(8).SYWAccountsId, result.SYWAccountsId)
            );
        }
    }
}
