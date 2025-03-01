using Postgrest.Models;
using Postgrest.Attributes;

namespace API.Models;

[Table("locations")] // Maps the class to the "locations" table in Supabase
public class Location : BaseModel
{
    [PrimaryKey("id")]
    public Guid Id { get; set; }

    [Column("name")] // Maps the "Name" property to the "name" column in the table
    public string Name { get; set; } = string.Empty;

    [Column("code_name")] // Maps the "Code" property to the "code" column in the table
    public string Code { get; set; } = string.Empty;

    [Column("is_active")] // Maps the "IsActive" property to the "is_active" column in the table
    public bool IsActive { get; set; } = true;

    // Parameterless constructor (required by Supabase)
    public Location() : base() // Call the base constructor from BaseModel
    {
        // Id will be auto-generated by Postgrest (no need to manually set it here)
        // Name, Code, and IsActive will be initialized in the property definitions
    }
}
