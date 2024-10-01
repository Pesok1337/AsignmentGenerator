using System;
using System.ComponentModel.DataAnnotations;

namespace TaskManagementAPI.Models
{
    public class ProductGroup
    {
        [Key]
        public int ProductGroupId { get; set; }
        public required string Name { get; set; }
        public Guid ProductGroupKey { get; set; }
    }
}