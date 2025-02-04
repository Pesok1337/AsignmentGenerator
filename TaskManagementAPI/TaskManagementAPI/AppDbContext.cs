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
        public DbSet<CustomEventFreq> CustomEventFreqs { get; set; }
        public DbSet<CSItem> CSItems { get; set; }
        public DbSet<CSPart> CSParts { get; set; }
        public DbSet<ControllSchedule> ControllSchedules { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // ��������� ��� ������ � ������������� ��������� ��� ��������
            modelBuilder.Entity<ProductGroup>().ToTable("ProductGroup");
            modelBuilder.Entity<DigitalSet>().ToTable("DigitalSet");
            modelBuilder.Entity<DigitalSetValue>().ToTable("DigitalSetValue");
            modelBuilder.Entity<OrgUnit>().ToTable("OrgUnit");
            modelBuilder.Entity<EventFreq>().ToTable("EventFreq");
            modelBuilder.Entity<ControllSchedule>().ToTable("ControlSchedule", "customer");
            //modelBuilder.Entity<SampleType>().ToTable("DigitalSetValue");

            modelBuilder.Entity<ProductGroup>()
            .HasKey(pg => pg.ProductGroupId); // ��������� ��������� ����

            modelBuilder.Entity<DigitalSet>()
            .HasKey(ds => ds.DigitalSetId); // ��������� ��������� ����

            modelBuilder.Entity<DigitalSetValue>()
            .HasKey(dsv => dsv.DigitalSetValueId); // ��������� ��������� ����

            modelBuilder.Entity<OrgUnit>()
            .HasKey(ou => ou.OrgUnitId); // ��������� ��������� ����
            modelBuilder.Entity<EventFreq>()
           .HasKey(ef => ef.EventFreqUid);
            modelBuilder.Entity<ControllSchedule>()
          .HasKey(cs => cs.ControllScheduleUid);

            base.OnModelCreating(modelBuilder);
        }
    }
}