using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using TaskManagementAPI.interfaces;
using TaskManagementAPI.models;

namespace TaskManagementAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomEventFreqController : ControllerBase
    {
        private readonly ICustomEventFreqService _service;

        public CustomEventFreqController(ICustomEventFreqService service)
        {
            _service = service;
        }

        // GET: api/CustomEventFreq
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CustomEventFreq>>> GetAll()
        {
            var eventFreqs = await _service.GetAllAsync();
            return Ok(eventFreqs);
        }

        // GET: api/CustomEventFreq/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<CustomEventFreq>> GetById(Guid id)
        {
            var eventFreq = await _service.GetByIdAsync(id);
            if (eventFreq == null)
            {
                return NotFound();
            }
            return Ok(eventFreq);
        }

        // POST: api/CustomEventFreq
        [HttpPost]
        public async Task<ActionResult<CustomEventFreq>> Create(CustomEventFreq customEventFreq)
        {
            var createdEventFreq = await _service.CreateAsync(customEventFreq);
            return CreatedAtAction(nameof(GetById), new { id = createdEventFreq.EventFreqUid }, createdEventFreq);
        }

        // PUT: api/CustomEventFreq/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(Guid id, CustomEventFreq customEventFreq)
        {
            if (id != customEventFreq.EventFreqUid)
            {
                return BadRequest();
            }

            await _service.UpdateAsync(customEventFreq);
            return NoContent();
        }

        // DELETE: api/CustomEventFreq/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            await _service.DeleteAsync(id);
            return NoContent();
        }
    }
}
