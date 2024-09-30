namespace TaskManagementAPI.models
{
    public class CustomEventFreq
    {
        public Guid EventFreqUid { get; set; }
        public CSItem CSItemId { get; set; }
        public DateTime Start {  get; set; }
        public DateTime End { get; set; }
        public string Freq {  get; set; } // hz
        public bool IsActive { get; set; }
        public string Description { get; set; }
    }
}
