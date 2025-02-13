using API.Models;
using Microsoft.AspNetCore.Authentication.OAuth;
using Microsoft.AspNetCore.Mvc;
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
        try
        {
            var response = await _supabase
            .From<Location>()
            // .Filter("is_active", Postgrest.Constants.Operator.Equals, true)
            .Get();

            Console.WriteLine($"Returned {response.Models.Count} locations");
            return response.Models ?? new List<Location>();

        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error fetching locations: {ex.Message}");
            return new List<Location>();
        }
    }

    public async Task<List<Trip>> GetTripsAsync(string startLocationId, string endLocationId, string tripDate)
    {
        try
        {
            if (string.IsNullOrEmpty(startLocationId) || string.IsNullOrEmpty(endLocationId) || string.IsNullOrEmpty(tripDate))
            {
                Console.WriteLine("Invalid input: startLocationId, endLocationId, or tripDate is missing.");
                return new List<Trip>();
            }

            if (!DateOnly.TryParse(tripDate, out DateOnly parsedDate))
            {
                Console.WriteLine($"Invalid date format: {tripDate}");
                return new List<Trip>();
            }

            int dayOfWeek = (int)parsedDate.DayOfWeek;

            var response = await _supabase
                .From<Trip>()
                .Filter("departure_location_id", Postgrest.Constants.Operator.Equals, startLocationId)
                .Filter("destination_location_id", Postgrest.Constants.Operator.Equals, endLocationId)
                .Filter("days_available", Postgrest.Constants.Operator.Contains, new int[] { dayOfWeek })
                .Get();

            Console.WriteLine($"Returned {response.Models.Count} trips for {tripDate} (Day: {dayOfWeek})");

            return response.Models ?? new List<Trip>();
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error fetching trips: {ex.Message}");
            return new List<Trip>();
        }
    }
}