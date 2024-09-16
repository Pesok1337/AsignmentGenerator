using System;
using System.ComponentModel.DataAnnotations;

namespace TaskManagementAPI.Models
{
    public class TaskLog
    {
        [Key]
        public Guid LogId { get; set; }
        public Guid TaskId { get; set; }
        public DateTime GenerationTime { get; set; }
        public string Action { get; set; }
    }
}
