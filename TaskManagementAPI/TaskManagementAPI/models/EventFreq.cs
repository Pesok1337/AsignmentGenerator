namespace TaskManagementAPI.models
{
    public class EventFreq
    {
        public Guid EventFreqUid { get; set; }
        public required string? Name { get; set; }
        public required string Description { get; set; }
        public DateTime ChangeDate { get; set; }
    }
}
