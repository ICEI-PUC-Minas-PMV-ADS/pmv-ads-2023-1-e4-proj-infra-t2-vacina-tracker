using api_mongo_vt.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;

namespace api_mongo_vt.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VacinaController : ControllerBase
    {
        private readonly VacinaContext _context;

        public VacinaController(VacinaContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Vacina>>> Get()
        {
            var vacinas = await _context.Vacinas.Find(_ => true).ToListAsync();
            return Ok(vacinas);
        }

        [HttpPost]
        public async Task<ActionResult<Vacina>> Post(Vacina vacina)
        {
            await _context.Vacinas.InsertOneAsync(vacina);
            return Ok(vacina);
        }
    }
}
