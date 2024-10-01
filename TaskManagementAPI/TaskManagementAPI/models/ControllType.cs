using System.ComponentModel.DataAnnotations;

namespace TaskManagementAPI.models
{
    public class ControllType
    {
        [Key]
        public int ControllTypeId { get; set; }
        public string Name { get; set; }
    }
}
