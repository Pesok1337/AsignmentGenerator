using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TaskManagementAPI.Data;

namespace TaskManagementAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventFreqController : ControllerBase
    {
        private readonly AppDbContext _context;

        public EventFreqController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<object>>> GetEventFreqs()
        {
            var eventFreqs = await _context.EventFreqs
                .Where(ef => ef.Name != null)
                .ToListAsync();

            return Ok(eventFreqs);
        }
    }
}
