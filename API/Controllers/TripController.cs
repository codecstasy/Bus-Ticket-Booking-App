using API.Services;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class TripController : ControllerBase
{
    private readonly SupabaseService _supabaseService;
    public TripController(SupabaseService supabaseService)
    {
        _supabaseService = supabaseService;
    }

    [HttpGet("get-trips")]
    public async Task<string> GetTrips()
    {
        return "Not Implemented"; // Not implemented yet
    }
}

