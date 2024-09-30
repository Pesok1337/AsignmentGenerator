using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;
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
        public async Task<ActionResult<IEnumerable<_ControlSchedule>>> GetControlSchedules()
        {
            return await _context.ControlSchedules.ToListAsync();
        }

        // GET: api/ControlSchedule/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<_ControlSchedule>> GetControlSchedule(Guid id)
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
        public async Task<ActionResult<_ControlSchedule>> CreateControlSchedule(_ControlSchedule controlSchedule)
        {
            controlSchedule.ControlScheduleUid = Guid.NewGuid();
            _context.ControlSchedules.Add(controlSchedule);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetControlSchedule), new { id = controlSchedule.ControlScheduleUid }, controlSchedule);
        }

        // PUT: api/ControlSchedule/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateControlSchedule(Guid id, _ControlSchedule controlSchedule)
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

        [HttpPost("deleteList")]
        public async Task<IActionResult> DeleteControlTasks([FromBody] List<Guid> ids)
        {
            var controlTasks = _context.ControlSchedules.Where(ct => ids.Contains(ct.ControlScheduleUid)).ToList();

            if (controlTasks == null || controlTasks.Count == 0)
            {
                return NotFound(new { message = "No records found to delete" });
            }

            _context.ControlSchedules.RemoveRange(controlTasks);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Records deleted successfully" });
        }
        private bool ControlScheduleExists(Guid id)
        {
            return _context.ControlSchedules.Any(e => e.ControlScheduleUid == id);
        }
    }
}
