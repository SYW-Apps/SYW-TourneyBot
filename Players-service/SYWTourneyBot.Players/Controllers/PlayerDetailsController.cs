using Microsoft.AspNetCore.Mvc;
using SYWTourneyBot.Players.Core;

namespace SYWTourneyBot.Players.Controllers
{
    [ApiController]
    [Route("api/players")]
    public class PlayerDetailsController : ControllerBase
    {
        private readonly PlayerDetailsHandler _handler;

        public PlayerDetailsController(PlayerDetailsHandler handler)
        {
            _handler = handler;
        }

        [HttpGet("all")]
        public async ValueTask<IActionResult> All(int page = 1, int limit = 10)
        {
            return new JsonResult(await _handler.GetAll(page, limit));
        }

        [HttpGet("search/{search}")]
        public async ValueTask<IActionResult> Search(string search, string? by, int page = 1, int limit = 10)
        {
            return new JsonResult(await _handler.Search(search, by, page, limit));
        }

        [HttpGet("{id}")]
        public async ValueTask<IActionResult> Get(string id)
        {
            return new JsonResult(await _handler.GetById(id));
        }

        [HttpGet("id/{otherId}")]
        public async ValueTask<IActionResult> GetId(string otherId)
        {
            return new JsonResult(await _handler.GetIdByOtherId(otherId));
        }
    }
}