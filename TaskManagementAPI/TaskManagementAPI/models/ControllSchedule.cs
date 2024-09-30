namespace TaskManagementAPI.models
{
    public class ControllSchedule
    {
        public Guid ControllScheduleUid { get; set; }
        public string Name { get; set; }
        public int Order { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime DateDate { get; set; }
        public bool IsActive { get; set; }
    }
}
