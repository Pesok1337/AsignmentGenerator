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
    public class ControllScheduleController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ControllScheduleController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/ControlSchedule
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ControllSchedule>>> GetControlSchedules()
        {
            return await _context.ControllSchedules.ToListAsync();
        }

        // GET: api/ControlSchedule/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<ControllSchedule>> GetControlSchedule(Guid id)
        {
            var controlSchedule = await _context.ControllSchedules.FindAsync(id);

            if (controlSchedule == null)
            {
                return NotFound();
            }

            return controlSchedule;
        }

        // POST: api/ControlSchedule
        [HttpPost]
        public async Task<ActionResult<ControllSchedule>> CreateControlSchedule(ControllSchedule controllSchedule)
        {
            controllSchedule.ControllScheduleUid = Guid.NewGuid();
            _context.ControllSchedules.Add(controllSchedule);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetControlSchedule), new { id = controllSchedule.ControllScheduleUid }, controllSchedule);
        }

        // PUT: api/ControlSchedule/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateControlSchedule(Guid id, ControllSchedule controlSchedule)
        {
            if (id != controlSchedule.ControllScheduleUid)
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
            var controlSchedule = await _context.ControllSchedules.FindAsync(id);
            if (controlSchedule == null)
            {
                return NotFound();
            }

            _context.ControllSchedules.Remove(controlSchedule);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpPost("deleteList")]
        public async Task<IActionResult> DeleteControlTasks([FromBody] List<Guid> ids)
        {
            var controlTasks = _context.ControllSchedules.Where(ct => ids.Contains(ct.ControllScheduleUid)).ToList();

            if (controlTasks == null || controlTasks.Count == 0)
            {
                return NotFound(new { message = "No records found to delete" });
            }

            _context.ControllSchedules.RemoveRange(controlTasks);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Records deleted successfully" });
        }
        private bool ControlScheduleExists(Guid id)
        {
            return _context.ControllSchedules.Any(e => e.ControllScheduleUid == id);
        }
    }
}
