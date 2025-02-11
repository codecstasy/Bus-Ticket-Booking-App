using API.Models;
using Postgrest.Models;
using Supabase;
using Supabase.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace API.Services;

public class SupabaseService
{
    private readonly Client _supabase;

    public SupabaseService(IConfiguration configuration)
    {
        var url = configuration["Supabase:Url"];
        var key = configuration["Supabase:Key"];

        var options = new SupabaseOptions
        {
            AutoConnectRealtime = true
        };

        _supabase = new Client(url, key, options);
        _supabase.InitializeAsync().Wait();
    }

    public async Task<List<Location>> GetLocationsAsync()
    {
        try {
            var response = await _supabase
            .From<Location>()
            // .Filter("is_active", Postgrest.Constants.Operator.Equals, true)
            .Get();
            
            
            Console.WriteLine($"Returned {response.Models.Count} locations");
            
            return response.Models ?? new List<Location>();
        } catch(Exception ex) {
            Console.WriteLine($"Error fetching locations: {ex.Message}");
            return new List<Location>();
        }
    }
}