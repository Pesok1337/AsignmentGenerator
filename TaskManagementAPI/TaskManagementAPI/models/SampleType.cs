using System.ComponentModel.DataAnnotations;

namespace TaskManagementAPI.models
{
    public class SampleType
    {
        [Key]
        public int SampleTypeId { get; set; }
        public string Name { get; set; }
    }
}
