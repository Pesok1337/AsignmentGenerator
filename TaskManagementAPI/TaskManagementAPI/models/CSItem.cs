using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using TaskManagementAPI.Models;

namespace TaskManagementAPI.models
{
    public class CSItem
    {
        [Key]
        public Guid CSItemUid { get; set; } // PK

        [Required]
        public Guid CSPartUid { get; set; }

        [ForeignKey("CSPartUid")]
        public CSPart CSPart { get; set; }

        [Required]
        public Guid ControllTypeId { get; set; }

        [ForeignKey("ControllTypeId")]
        public ControllType ControllType { get; set; }

        [Required]
        public Guid SampleTypeId { get; set; }

        [ForeignKey("SampleTypeId")]
        public SampleType SampleType { get; set; }

        [Required]
        public Guid OrgUnitId { get; set; }

        [ForeignKey("OrgUnitId")]
        public OrgUnit OrgUnit { get; set; }

        [Required]
        public Guid ProductGroupId { get; set; }

        [ForeignKey("ProductGroupId")]
        public ProductGroup ProductGroup { get; set; }

        public string Description { get; set; }
    }
}
