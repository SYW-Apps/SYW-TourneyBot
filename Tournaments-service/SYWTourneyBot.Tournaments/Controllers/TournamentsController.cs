using Microsoft.AspNetCore.Mvc;

namespace SYWTourneyBot.Tournaments.Controllers
{
    [ApiController]
    [Route("api/tournaments")]
    public class TournamentsController : ControllerBase
    {
        public TournamentsController()
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

        [HttpGet("{id}")]
        public IActionResult Get(string id)
        {
            return new JsonResult(new { });
        }

        [HttpGet("{id}/details")]
        public IActionResult GetDetails(string id)
        {
            return new JsonResult(new { });
        }

        [HttpGet("{id}/owner")]
        public IActionResult GetOwner(string id)
        {
            return new JsonResult(new { });
        }

        [HttpGet("{id}/creation-time")]
        public IActionResult GetCreationTime(string id)
        {
            return new JsonResult(new { });
        }

        [HttpGet("{id}/end")]
        public IActionResult GetEnd(string id)
        {
            return new JsonResult(new { });
        }

        [HttpGet("{id}/end-time")]
        public IActionResult GetEndTime(string id)
        {
            return new JsonResult(new { });
        }

        [HttpGet("{id}/cancelled")]
        public IActionResult GetCancelled(string id)
        {
            return new JsonResult(new { });
        }

        [HttpGet("{id}/twitch")]
        public IActionResult GetTwitch(string id)
        {
            return new JsonResult(new { });
        }

        [HttpGet("{id}/discord")]
        public IActionResult GetDiscord(string id)
        {
            return new JsonResult(new { });
        }

        [HttpGet("{id}/discord-channel")]
        public IActionResult GetDiscordChannel(string id)
        {
            return new JsonResult(new { });
        }

        [HttpGet("{id}/config")]
        public IActionResult GetConfiguration(string id)
        {
            return new JsonResult(new { });
        }

        [HttpGet("{id}/bracket")]
        public IActionResult GetBracket(string id)
        {
            return new JsonResult(new { });
        }

        [HttpGet("{id}/bracket-size")]
        public IActionResult GetBracketSize(string id)
        {
            return new JsonResult(new { });
        }

        [HttpGet("{id}/bracket-generation")]
        public IActionResult GetBracketGenerationType(string id)
        {
            return new JsonResult(new { });
        }

        [HttpGet("{id}/bracket-start-time")]
        public IActionResult GetBracketStartTime(string id)
        {
            return new JsonResult(new { });
        }

        [HttpGet("{id}/game")]
        public IActionResult GetGame(string id)
        {
            return new JsonResult(new { });
        }

        [HttpGet("{id}/gamemode")]
        public IActionResult GetGameMode(string id)
        {
            return new JsonResult(new { });
        }

        [HttpGet("{id}/queue")]
        public IActionResult GetQueue(string id)
        {
            return new JsonResult(new { });
        }

        [HttpGet("{id}/queue-start-time")]
        public IActionResult GetQueueStartTime(string id)
        {
            return new JsonResult(new { });
        }

        [HttpGet("{id}/queue-end-time")]
        public IActionResult GetQueueEndTime(string id)
        {
            return new JsonResult(new { });
        }

        [HttpGet("{id}/teams")]
        public IActionResult GetTeams(string id)
        {
            return new JsonResult(new { });
        }

        [HttpGet("{id}/team-size")]
        public IActionResult GetTeamSize(string id)
        {
            return new JsonResult(new { });
        }

        [HttpGet("{id}/team-generation")]
        public IActionResult GetTeamGenerationType(string id)
        {
            return new JsonResult(new { });
        }

        [HttpGet("{id}/allow-viewer-teams")]
        public IActionResult GetAllowViewerTeams(string id)
        {
            return new JsonResult(new { });
        }
    }
}