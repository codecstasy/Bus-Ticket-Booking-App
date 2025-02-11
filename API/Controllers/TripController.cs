using API.Models;
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
    public async Task<ActionResult<List<Trip>>> GetTrips(
        [FromQuery] string startLocationId,
        [FromQuery] string endLocationId,
        [FromQuery] string tripDate
    )
    {
        try 
        {
            if (string.IsNullOrEmpty(startLocationId) || string.IsNullOrEmpty(endLocationId) || string.IsNullOrEmpty(tripDate))
            {
                return BadRequest("Missing required parameters: startLocationId, endLocationId, or tripDate.");
            }

            var trips = await _supabaseService.GetTripsAsync(startLocationId, endLocationId, tripDate);

            if (trips == null || trips.Count == 0)
            {
                return NotFound("No trips found matching the given criteria.");
            }

            return Ok(trips);
        } 
        catch (Exception ex) 
        {
            Console.WriteLine($"Error fetching trips: {ex.Message}");
            return StatusCode(500, $"Internal Server Error: {ex.Message}");
        }
    }
}

