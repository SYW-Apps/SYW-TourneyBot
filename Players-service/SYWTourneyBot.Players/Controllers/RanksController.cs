using Microsoft.AspNetCore.Mvc;

namespace SYWTourneyBot.Players.Controllers
{
    [ApiController]
    [Route("api/players/ranks")]
    public class RanksController : ControllerBase
    {
        public RanksController()
        {
            
        }

        [HttpGet("{id}")]
        public IActionResult Get(string id)
        {
            return new JsonResult(true);
        }

        [HttpGet("{id}/{game}")]
        public IActionResult GetGameRank(string id, string game)
        {
            return new JsonResult(true);
        }

        [HttpGet("{id}/{game}/{gamemode}")]
        public IActionResult GetGameModeRank(string id, string game, string gamemode)
        {
            return new JsonResult(true);
        }
    }
}