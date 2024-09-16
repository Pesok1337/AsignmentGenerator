using Microsoft.EntityFrameworkCore;
using TaskManagementAPI.Models;
namespace TaskManagementAPI.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Models.Task> Tasks { get; set; }
        public DbSet<ProductGroup> ProductGroups { get; set; }
        public DbSet<ControlPoint> ControlPoints { get; set; }
        public DbSet<TaskLog> TaskLogs { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Models.Task>()
                .Property(t => t.TaskId)
                .HasDefaultValueSql("gen_random_uuid()");

            modelBuilder.Entity<TaskLog>()
                .Property(t => t.LogId)
                .HasDefaultValueSql("gen_random_uuid()");

            modelBuilder.Entity<ProductGroup>()
                .Property(p => p.ProductGroupId)
                .HasDefaultValueSql("gen_random_uuid()");

            modelBuilder.Entity<ControlPoint>()
                .Property(c => c.ControlPointId)
                .HasDefaultValueSql("gen_random_uuid()");
        }
    }
}