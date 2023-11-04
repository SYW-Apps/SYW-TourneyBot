using Microsoft.AspNetCore.Mvc;

namespace SYWTourneyBot.Players.Controllers
{
    [ApiController]
    [Route("api/players")]
    public class PlayerDetailsController : ControllerBase
    {
        public PlayerDetailsController()
        {
            
        }

        [HttpGet("all")]
        public IActionResult All(int page = 1, int limit = 10)
        {
            return new JsonResult(true);
        }

        [HttpGet("search/{search}")]
        public IActionResult Search(string search, string? by, int page = 1, int limit = 10)
        {
            return new JsonResult(true);
        }

        [HttpGet("{id}")]
        public IActionResult Get(string id)
        {
            return new JsonResult(true);
        }

        [HttpGet("id/{otherId}")]
        public IActionResult GetId(string otherId)
        {
            return new JsonResult(true);
        }
    }
}