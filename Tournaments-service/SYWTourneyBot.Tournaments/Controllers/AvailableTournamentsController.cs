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
        public IActionResult All(int page = 1, int limit = 10)
        {
            return new JsonResult(new { });
        }

        [HttpGet("search")]
        public IActionResult All(string search, string? by = null, int page = 1, int limit = 10)
        {
            return new JsonResult(new { });
        }

        [HttpGet("{id}")]
        public IActionResult Search(string id)
        {
            return new JsonResult(new { });
        }
    }
}