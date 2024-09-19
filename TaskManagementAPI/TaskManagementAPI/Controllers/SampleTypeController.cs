using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TaskManagementAPI.Data;

namespace TaskManagementAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SampleTypeController : ControllerBase
    {
        private readonly AppDbContext _context;

        public SampleTypeController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<object>>> GetSampleTypes()
        {
            var sampleTypes = await _context.DigitalSetValues
            .Where(dsv => dsv.DigitalSetId == 464)
            .ToListAsync();

            return Ok(sampleTypes);
        }
    }
}
