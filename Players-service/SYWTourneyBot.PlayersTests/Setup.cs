using RichardSzalay.MockHttp;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SYWTourneyBot.Players.Exchange.DTO.Player;
using SYWTourneyBot.Players.Exchange.DTO.Player.Ranks;

namespace SYWTourneyBot.Players.Tests
{
    internal static class Setup
    {
        private static readonly string _alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        internal static string Alphabet { get { return _alphabet; } }

        internal static HttpClient CreateMockedHttpClientWithMockedRequest(HttpMethod method, string pathAndQuery, Func<Task<HttpResponseMessage>> respondFunc)
        {
            MockHttpMessageHandler mockHttp = new MockHttpMessageHandler();
            mockHttp.When(method, pathAndQuery).Respond(respondFunc);

            return new HttpClient(mockHttp) { BaseAddress = new Uri("http://localhost:5000") };
        }

        internal static Player GeneratePlayer(int seed = 0, Player? tournament = null)
        {
            tournament ??= new Player();

            tournament.SYWAccountsId = seed.ToString();
            tournament.TwitchId = (++seed).ToString();
            tournament.TwitchDisplayName = (++seed).ToString();
            tournament.TwitchName = (++seed).ToString();
            tournament.DiscordId = (++seed).ToString();
            tournament.DiscordName = (++seed).ToString();
            tournament.EpicGamesId = (++seed).ToString();
            tournament.EpicGamesName = (++seed).ToString();
            tournament.SteamId = (++seed).ToString();
            tournament.SteamName = (++seed).ToString();
            tournament.PlayStationId = (++seed).ToString();
            tournament.PlayStationName = (++seed).ToString();
            tournament.XboxId = (++seed).ToString();
            tournament.XboxName = (++seed).ToString();
            tournament.NintendoSwitchId = (++seed).ToString();
            tournament.NintendoSwitchName = (++seed).ToString();
            tournament.Ranks = new Exchange.DTO.Player.Ranks.Ranks()
            {
                Games = new Dictionary<string, GameRank>()
                {
                    {
                        (++seed).ToString(),
                        new GameRank()
                        {
                            GameId = seed.ToString(),
                            GameName = seed.ToString(),

                            GameModes = new Dictionary<string, GameModeRank>()
                            {
                                {
                                    (++seed).ToString(),
                                    new GameModeRank()
                                    {
                                        GameModeId = seed.ToString(),
                                        GameModeName = seed.ToString(),

                                        RankName = (++seed).ToString(),
                                        MMR = ++seed,

                                        LastUpdatedTime = DateTime.Today.AddDays(-seed),
                                    }
                                },
                                {
                                    (++seed).ToString(),
                                    new GameModeRank()
                                    {
                                        GameModeId = seed.ToString(),
                                        GameModeName = seed.ToString(),

                                        RankName = (++seed).ToString(),
                                        MMR = ++seed,

                                        LastUpdatedTime = DateTime.Today.AddDays(-seed),
                                    }
                                },
                            },
                        }
                    },
                    {
                        (++seed).ToString(),
                        new GameRank()
                        {
                            GameId = seed.ToString(),
                            GameName = seed.ToString(),

                            GameModes = new Dictionary<string, GameModeRank>()
                            {
                                {
                                    (++seed).ToString(),
                                    new GameModeRank()
                                    {
                                        GameModeId = seed.ToString(),
                                        GameModeName = seed.ToString(),

                                        RankName = (++seed).ToString(),
                                        MMR = ++seed,

                                        LastUpdatedTime = DateTime.Today.AddDays(-seed),
                                    }
                                },
                                {
                                    (++seed).ToString(),
                                    new GameModeRank()
                                    {
                                        GameModeId = seed.ToString(),
                                        GameModeName = seed.ToString(),

                                        RankName = (++seed).ToString(),
                                        MMR = ++seed,

                                        LastUpdatedTime = DateTime.Today.AddDays(-seed),
                                    }
                                },
                            },
                        }
                    },
                },
            };

            return tournament;
        }
    }
}
