using System.ComponentModel.DataAnnotations;

namespace TaskManagementAPI.models
{
    public class OrgUnit
    {
        [Key]
        public int OrgUnitId { get; set; }
        public required string Name { get; set; }
        public int? ParentUnitId { get; set; }
        public int OrgUnitLevelId { get; set; }
    }
}
