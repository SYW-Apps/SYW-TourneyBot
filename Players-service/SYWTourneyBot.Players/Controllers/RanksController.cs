using Microsoft.AspNetCore.Mvc;
using SYWTourneyBot.Players.Core;

namespace SYWTourneyBot.Players.Controllers
{
    [ApiController]
    [Route("api/players/ranks")]
    public class RanksController : ControllerBase
    {
        private readonly RanksHandler _handler;

        public RanksController(RanksHandler handler)
        {
            _handler = handler;
        }

        [HttpGet("{id}")]
        public async ValueTask<IActionResult> Get(string id)
        {
            return new JsonResult(await _handler.GetRanks(id));
        }

        [HttpGet("{id}/{game}")]
        public async ValueTask<IActionResult> GetGameRank(string id, string game)
        {
            return new JsonResult(await _handler.GetGameRank(id, game));
        }

        [HttpGet("{id}/{game}/{gamemode}")]
        public async ValueTask<IActionResult> GetGameModeRank(string id, string game, string gamemode)
        {
            return new JsonResult(await _handler.GetGameModeRank(id, game, gamemode));
        }
    }
}