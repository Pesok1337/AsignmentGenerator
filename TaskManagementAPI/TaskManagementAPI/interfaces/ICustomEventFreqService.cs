using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using TaskManagementAPI.models;
namespace TaskManagementAPI.interfaces
{
    public interface ICustomEventFreqService
    {
        Task<IEnumerable<CustomEventFreq>> GetAllAsync();
        Task<CustomEventFreq> GetByIdAsync(Guid id);
        Task<CustomEventFreq> CreateAsync(CustomEventFreq customEventFreq);
        Task UpdateAsync(CustomEventFreq customEventFreq);
        Task DeleteAsync(Guid id);
    }
}
