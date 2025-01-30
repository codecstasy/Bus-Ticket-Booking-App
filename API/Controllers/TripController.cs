using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class TripController : ControllerBase
{
    [HttpGet("get-trips")]
    public ActionResult<string> GetTrips()
    {
        return "Dummy trip";
    }
}

