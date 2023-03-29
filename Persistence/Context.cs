using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence;

public class Context : DbContext
{
    public Context(DbContextOptions options) : base(options)
    {
    }

    public DbSet<Activity> Activities { get; set; }
}