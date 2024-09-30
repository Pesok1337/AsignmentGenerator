using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace TaskManagementAPI.models
{
    [Table("ControlSchedule", Schema = "customer")]
    public class _ControlSchedule
    {
        [Key]
        public Guid ControlScheduleUid { get; set; }

        [Required]
        public string ControlType { get; set; }

        [Required]
        public string SampleType { get; set; }

        [Required]
        public string? OrgUnit { get; set; }

        [Required]
        public string ProductGroup { get; set; }

        [Required]
        public string EventFreq { get; set; }

        [Required]
        public DateTimeOffset StartDate { get; set; }
        [Required]
        public DateTimeOffset? EndDate { get; set; }
        [Required]
        public bool IsActive { get; set; }
        [Required]
        public string Description { get; set; }
    }
}
