using System;

namespace TaskManagementAPI.Models
{
    public class ProductGroup
    {
        public int ProductGroupId { get; set; }
        public required string Name { get; set; }
        public Guid ProductGroupKey { get; set; }
    }
}