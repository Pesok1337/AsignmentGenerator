using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TaskManagementAPI.Data;

namespace TaskManagementAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DigitalSetController : ControllerBase
    {
        private readonly AppDbContext _context;

        public DigitalSetController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<object>>> GetDigitalSets()
        {
            var digitalSets = await _context.DigitalSets
            .Join(_context.DigitalSetValues,
                  ds => ds.DigitalSetId,
                  dsv => dsv.DigitalSetId,
                  (ds, dsv) => new { ds.Name, dsv.Value, dsv.DigitalSetId }) // Добавляем DigitalSetId в анонимный тип
            .Where(dsv => dsv.DigitalSetId == 463) // Теперь Where будет работать правильно
            .ToListAsync();

            return Ok(digitalSets);
        }
    }
}
