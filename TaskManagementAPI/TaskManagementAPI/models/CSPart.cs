namespace TaskManagementAPI.models
{
    public class CSPart
    {
        public Guid CSPartUid { get; set; }
        public ControllSchedule ControllScheduleUid { get; set; }
        public string Name { get; set; }
        public int Order { get; set; }
        public bool IsActive { get; set; }
    }
}
