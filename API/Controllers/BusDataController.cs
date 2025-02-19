using API.Models;
using API.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class BusDataController : BaseApiController
{
    private readonly SupabaseService _supabaseService;

    public BusDataController(SupabaseService supabaseService)
    {
        this._supabaseService = supabaseService;
    }

    [HttpGet("get-bus-data/{id}")]
    public async Task<ActionResult<Bus>> getBusData([FromRoute] int id) {
        var bus = await _supabaseService.getBusDataAsync(id);
        
        // will return null if no bus is found with that id
        if(bus == null) {
            return NotFound(new { message = "Bus not found"});
        }
        
        return bus;
    }
}

