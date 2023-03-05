using Application.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VoluntarioController : ControllerBase
    {
        private readonly IVoluntarioService _voluntarioService;

        public VoluntarioController(IVoluntarioService voluntarioService)
        {
            _voluntarioService = voluntarioService;
        }

        [HttpGet]
        public async Task<IActionResult> ObterONGs()
        {
            try
            {
                var result = await _voluntarioService.ObterONGs();

                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public async Task<IActionResult> CandidatarONG([Required] int voluntarioId, [Required] int ongId)
        {
            try
            {
                await _voluntarioService.CandidatarONG(voluntarioId, ongId);

                return NoContent();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
