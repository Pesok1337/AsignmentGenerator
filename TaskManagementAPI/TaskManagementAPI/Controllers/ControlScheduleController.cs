using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TaskManagementAPI.Data;
using TaskManagementAPI.models;

namespace TaskManagementAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ControlScheduleController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ControlScheduleController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/ControlSchedule
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ControlSchedule>>> GetControlSchedules()
        {
            return await _context.ControlSchedules.ToListAsync();
        }

        // GET: api/ControlSchedule/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<ControlSchedule>> GetControlSchedule(Guid id)
        {
            var controlSchedule = await _context.ControlSchedules.FindAsync(id);

            if (controlSchedule == null)
            {
                return NotFound();
            }

            return controlSchedule;
        }

        // POST: api/ControlSchedule
        [HttpPost]
        public async Task<ActionResult<ControlSchedule>> CreateControlSchedule(ControlSchedule controlSchedule)
        {
            controlSchedule.ControlScheduleUid = Guid.NewGuid();
            _context.ControlSchedules.Add(controlSchedule);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetControlSchedule), new { id = controlSchedule.ControlScheduleUid }, controlSchedule);
        }

        // PUT: api/ControlSchedule/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateControlSchedule(Guid id, ControlSchedule controlSchedule)
        {
            if (id != controlSchedule.ControlScheduleUid)
            {
                return BadRequest();
            }

            _context.Entry(controlSchedule).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ControlScheduleExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // DELETE: api/ControlSchedule/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteControlSchedule(Guid id)
        {
            var controlSchedule = await _context.ControlSchedules.FindAsync(id);
            if (controlSchedule == null)
            {
                return NotFound();
            }

            _context.ControlSchedules.Remove(controlSchedule);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ControlScheduleExists(Guid id)
        {
            return _context.ControlSchedules.Any(e => e.ControlScheduleUid == id);
        }
    }
}
