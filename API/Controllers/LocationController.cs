using API.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class LocationController : ControllerBase
{
    private readonly SupabaseService _supabaseService;
    public LocationController(SupabaseService supabaseService)
    {
        _supabaseService = supabaseService;
    }
    [HttpGet("get-locations")]
    public async Task<IActionResult> GetLocations()
    {
        var locations = await _supabaseService.GetLocationsAsync();
        return Ok(locations);
    }
}

