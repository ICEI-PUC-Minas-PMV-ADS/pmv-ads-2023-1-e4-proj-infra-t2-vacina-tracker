using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using vacina_tracker_1.Models;

namespace vacina_tracker_1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VacinasController : ControllerBase
    {
        private readonly AppDbContext _context;

        public VacinasController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult> GetAll()
        {
            var model = await _context.Vacina.ToListAsync();

            return Ok(model);
        }

        [HttpPost]
        public async Task<ActionResult> Create(Vacina model)
        {
            _context.Vacina.Add(model);
            await _context.SaveChangesAsync();

            //return Ok(model);

            return CreatedAtAction("GetById", new { id = model.Id }, model);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> GetById(int id)
        {
            var model = await _context.Vacina
                //.Include(t => t.Responsavel).ThenInclude(t => t.Responsavel)
                //.Include(t => t.Responsavel)
                .FirstOrDefaultAsync(c => c.Id == id);

            if (model == null) return NotFound();

            //GerarLinks(model);

            return Ok(model);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> Update(int id, Vacina model)
        {
            if (id != model.Id) return BadRequest();
            var modeloDb = await _context.Vacina.AsNoTracking()
                .FirstOrDefaultAsync(c => c.Id == id);

            if (modeloDb == null) return NotFound();

            _context.Vacina.Update(model);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var model = await _context.Vacina.FindAsync(id);

            if (model == null) return NotFound();

            _context.Vacina.Remove(model);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
