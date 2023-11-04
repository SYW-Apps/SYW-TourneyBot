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
        private Func<Task<HttpResponseMessage>> RespondToGetIdByOtherIdRequest(IEnumerable<Player> database, string otherId)
        {
            return () => Task.FromResult(new HttpResponseMessage()
            {
                Content = JsonContent.Create(database.FirstOrDefault(x => x.TwitchId == otherId || x.DiscordId == otherId || x.EpicGamesId == otherId || x.SteamId == otherId || x.PlayStationId == otherId || x.XboxId == otherId || x.NintendoSwitchId == otherId)?.SYWAccountsId),
            });
        }

        [Fact]
        public async Task GetIdByOtherId_Id1_Returns1PlayerWithId1()
        {
            const string id = "1";
            const string otherId = "2";
            IEnumerable<Player> database = Enumerable.Repeat(new Player(), 2).Select((p, index) => { p.SYWAccountsId = index.ToString(); p.TwitchId = (++index).ToString(); return p; });
            HttpClient mockedHttpClient = Setup.CreateMockedHttpClientWithMockedRequest(HttpMethod.Get, $"/api/players/id/{otherId}",
                RespondToGetIdByOtherIdRequest(database, otherId));
            PlayerDetailsController controller = CreateController(mockedHttpClient);

            JsonResult? response = await controller.GetId(otherId) as JsonResult;

            Assert.NotNull(response);
            string? result = response.Value as string;
            Assert.NotNull(result);
            Assert.Equal(id, result);
        }

        [Fact]
        public async Task GetIdByOtherId_Id25_ReturnsNothing()
        {
            const string id = "25";
            const string otherId = "26";
            IEnumerable<Player> database = Enumerable.Repeat(new Player(), 2).Select((p, index) => { p.SYWAccountsId = index.ToString(); p.TwitchId = (++index).ToString(); return p; });
            HttpClient mockedHttpClient = Setup.CreateMockedHttpClientWithMockedRequest(HttpMethod.Get, $"/api/players/id/{otherId}",
                RespondToGetIdByOtherIdRequest(database, otherId));
            PlayerDetailsController controller = CreateController(mockedHttpClient);

            JsonResult? response = await controller.GetId(otherId) as JsonResult;

            Assert.NotNull(response);
            string? result = response.Value as string;
            Assert.Null(result);
        }
    }
}
