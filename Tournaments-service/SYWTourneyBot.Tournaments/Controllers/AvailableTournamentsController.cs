using Microsoft.AspNetCore.Mvc;

namespace SYWTourneyBot.Tournaments.Controllers
{
    [ApiController]
    [Route("api/tournaments/available")]
    public class AvailableTournamentsController : ControllerBase
    {
        public AvailableTournamentsController()
        {
            
        }

        [HttpGet("all")]
        public IActionResult All([FromQuery] int page = 1, [FromQuery] int limit = 10)
        {
            return new JsonResult(new { });
        }

        [HttpGet("search/{search}")]
        public IActionResult Search(string search, [FromQuery] string? by = null, [FromQuery] int page = 1, [FromQuery] int limit = 10)
        {
            return new JsonResult(new { });
        }
    }
}