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
        private Func<Task<HttpResponseMessage>> RespondToGetByIdRequest(IEnumerable<Player> database, string id)
        {
            return () => Task.FromResult(new HttpResponseMessage()
            {
                Content = JsonContent.Create(database.FirstOrDefault(x => x.SYWAccountsId == id)),
            });
        }

        [Fact]
        public async Task GetById_Id1_Returns1PlayerWithId1()
        {
            const string id = "1";
            IEnumerable<Player> database = Enumerable.Repeat(new Player(), 2).Select((p, index) => Setup.GeneratePlayer(index, p));
            HttpClient mockedHttpClient = Setup.CreateMockedHttpClientWithMockedRequest(HttpMethod.Get, $"/api/players/{id}",
                RespondToGetByIdRequest(database, id));
            PlayerDetailsController controller = CreateController(mockedHttpClient);

            JsonResult? response = await controller.Get(id) as JsonResult;

            Assert.NotNull(response);
            Player? result = response.Value as Player;
            Assert.NotNull(result);
            Assert.Equal(id, result.SYWAccountsId);
        }

        [Fact]
        public async Task GetById_Id25_ReturnsNothing()
        {
            const string id = "25";
            IEnumerable<Player> database = Enumerable.Repeat(new Player(), 2).Select((p, index) => Setup.GeneratePlayer(index, p));
            HttpClient mockedHttpClient = Setup.CreateMockedHttpClientWithMockedRequest(HttpMethod.Get, $"/api/players/{id}",
                RespondToGetByIdRequest(database, id));
            PlayerDetailsController controller = CreateController(mockedHttpClient);

            JsonResult? response = await controller.Get(id) as JsonResult;

            Assert.NotNull(response);
            Player? result = response.Value as Player;
            Assert.Null(result);
        }
    }
}
