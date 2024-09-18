using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TaskManagementAPI.Data;
using TaskManagementAPI.models;

namespace TaskManagementAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrgUnitController : ControllerBase
    {
        private readonly AppDbContext _context;

        public OrgUnitController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<OrgUnit>>> GetOrgUnits()
        {
            var orgUnits = await _context.OrgUnits.ToListAsync();
            return Ok(orgUnits);
        }
    }
}
