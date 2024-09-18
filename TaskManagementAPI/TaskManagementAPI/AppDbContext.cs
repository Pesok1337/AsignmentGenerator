using Microsoft.EntityFrameworkCore;
using TaskManagementAPI.models;
using TaskManagementAPI.Models;
namespace TaskManagementAPI.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<ProductGroup> ProductGroups { get; set; }
        public DbSet<DigitalSet> DigitalSets { get; set; }
        public DbSet<DigitalSetValue> DigitalSetValues { get; set; }
        public DbSet<OrgUnit> OrgUnits { get; set; }
        public DbSet<EventFreq> EventFreqs { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Настройка для работы с существующими таблицами без миграций
            modelBuilder.Entity<ProductGroup>().ToTable("ProductGroup");
            modelBuilder.Entity<DigitalSet>().ToTable("DigitalSet");
            modelBuilder.Entity<DigitalSetValue>().ToTable("DigitalSetValue");
            modelBuilder.Entity<OrgUnit>().ToTable("OrgUnit");
            modelBuilder.Entity<EventFreq>().ToTable("EventFreq");

            modelBuilder.Entity<ProductGroup>()
            .HasKey(pg => pg.ProductGroupId); // Указываем первичный ключ

            modelBuilder.Entity<DigitalSet>()
            .HasKey(ds => ds.DigitalSetId); // Указываем первичный ключ

            modelBuilder.Entity<DigitalSetValue>()
            .HasKey(dsv => dsv.DigitalSetValueId); // Указываем первичный ключ

            modelBuilder.Entity<OrgUnit>()
            .HasKey(ou => ou.OrgUnitId); // Указываем первичный ключ
            modelBuilder.Entity<EventFreq>()
           .HasKey(ef => ef.EventFreqUid); // Указываем первичный ключ

            base.OnModelCreating(modelBuilder);
        }
    }
}