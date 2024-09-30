using TaskManagementAPI.Models;

namespace TaskManagementAPI.models
{
    public class CSItem
    {
        public Guid CSItemUid { get; set; }
        public CSPart CSPartUid { get; set; }
        public ControllType ControllTypeId { get; set; }
        public SampleType SampleTypeId { get; set; }
        public OrgUnit OrgUnitId { get; set; }
        public ProductGroup ProductGroupId { get; set; }
        public string Description {  get; set; }
    }
}
