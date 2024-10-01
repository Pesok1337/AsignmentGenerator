using Microsoft.EntityFrameworkCore;
using TaskManagementAPI.Data;
using TaskManagementAPI.interfaces;
using TaskManagementAPI.models;

namespace TaskManagementAPI.Services
{
    public class CustomEventFreqService: ICustomEventFreqService
    {
        private readonly AppDbContext _context;

        public CustomEventFreqService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<CustomEventFreq>> GetAllAsync()
        {
            return await _context.CustomEventFreqs
                .Include(e => e.CSItem)
                .ToListAsync();
        }

        public async Task<CustomEventFreq> GetByIdAsync(Guid id)
        {
            return await _context.CustomEventFreqs
                .Include(e => e.CSItem)
                .FirstOrDefaultAsync(e => e.EventFreqUid == id);
        }

        public async Task<CustomEventFreq> CreateAsync(CustomEventFreq customEventFreq)
        {
            _context.CustomEventFreqs.Add(customEventFreq);
            await _context.SaveChangesAsync();
            return customEventFreq;
        }

        public async Task UpdateAsync(CustomEventFreq customEventFreq)
        {
            _context.CustomEventFreqs.Update(customEventFreq);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(Guid id)
        {
            var entity = await _context.CustomEventFreqs.FindAsync(id);
            if (entity != null)
            {
                _context.CustomEventFreqs.Remove(entity);
                await _context.SaveChangesAsync();
            }
        }
    }
}
