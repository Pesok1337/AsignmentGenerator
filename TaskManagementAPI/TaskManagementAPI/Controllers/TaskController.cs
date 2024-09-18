using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TaskManagementAPI.Data;
using TaskManagementAPI.Models;

namespace TaskManagementAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TaskController : ControllerBase
    {
        //    private readonly AppDbContext _context;

        //    public TaskController(AppDbContext context)
        //    {
        //        _context = context;
        //    }

        //    [HttpPost()]
        //    public async Task<IActionResult> CreateTask([FromBody] Models.Task task)
        //    {
        //        _context.Tasks.Add(task);
        //        await _context.SaveChangesAsync();
        //        return CreatedAtAction(nameof(GetTask), new { id = task.TaskId }, task);
        //    }

        //    [HttpGet("all")]
        //    public async Task<ActionResult<IEnumerable<Models.Task>>> GetAllTasks()
        //    {
        //        var tasks = await _context.Tasks
        //            .Include(t => t.ProductGroup)
        //            .Include(t => t.ControlPoint)
        //            .ToListAsync();
        //        if (tasks == null || !tasks.Any())
        //        {
        //            return NotFound();
        //        }
        //        return tasks;
        //    }

        //    [HttpGet("{id}")]
        //    public async Task<ActionResult<Models.Task>> GetTask(Guid id)
        //    {
        //        var task = await _context.Tasks.FindAsync(id);
        //        if (task == null)
        //        {
        //            return NotFound();
        //        }
        //        return task;
        //    }

        //    [HttpPut("{id}/frequency")]
        //    public async Task<IActionResult> UpdateTaskFrequency(Guid id, [FromBody] string frequency)
        //    {
        //        var task = await _context.Tasks.FindAsync(id);
        //        if (task == null)
        //        {
        //            return NotFound();
        //        }
        //        task.Frequency = frequency;
        //        await _context.SaveChangesAsync();
        //        return NoContent();
        //    }

        //    [HttpGet("product-groups")]
        //    public async Task<ActionResult<IEnumerable<ProductGroup>>> GetProductGroups()
        //    {
        //        return await _context.ProductGroups.ToListAsync();
        //    }

        //    [HttpGet("control-points")]
        //    public async Task<ActionResult<IEnumerable<ControlPoint>>> GetControlPoints()
        //    {
        //        return await _context.ControlPoints.ToListAsync();
        //    }

        //    [HttpPut("{id}/complete")]
        //    public async Task<IActionResult> CompleteTask(Guid id)
        //    {
        //        var task = await _context.Tasks.FindAsync(id);
        //        if (task == null)
        //        {
        //            return NotFound();
        //        }
        //        task.IsPartiallyFilled = false;
        //        await _context.SaveChangesAsync();
        //        return NoContent();
        //    }
    }
}