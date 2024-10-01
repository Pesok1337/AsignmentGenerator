using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace TaskManagementAPI.models
{
    public class CustomEventFreq
    {
        [Key]
        public Guid EventFreqUid { get; set; } // PK

        [Required]
        public Guid CSItemUid { get; set; } // FK

        [ForeignKey("CSItemUid")]
        public CSItem CSItem { get; set; } // Navigation property

        [Required]
        public DateTime Start { get; set; }

        [Required]
        public DateTime End { get; set; }

        [Required]
        public string Freq { get; set; } // Frequency in Hz

        public bool IsActive { get; set; }

        public string Description { get; set; }
    }
}
