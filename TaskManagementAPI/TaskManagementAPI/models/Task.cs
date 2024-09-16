using System;

namespace TaskManagementAPI.Models
{
    public class Task
    {
        public Guid TaskId { get; set; }
        public Guid ProductGroupId { get; set; }
        public Guid ControlPointId { get; set; }
        public string Frequency { get; set; }
        public DateTime TimeToExecute { get; set; }
        public bool IsPartiallyFilled { get; set; }

        public ProductGroup ProductGroup { get; set; }
        public ControlPoint ControlPoint { get; set; }
    }
}