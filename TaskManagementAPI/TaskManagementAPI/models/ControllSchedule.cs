using System.ComponentModel.DataAnnotations;

namespace TaskManagementAPI.models
{
    public class ControllSchedule
    {
        [Key]
        public Guid ControllScheduleUid { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public int Order { get; set; }
        [Required]
        public DateTime StartDate { get; set; }
        [Required]
        public DateTime DateDate { get; set; }
        [Required]
        public bool IsActive { get; set; }
    }
}
