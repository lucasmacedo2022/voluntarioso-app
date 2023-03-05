using Application.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ONGController : ControllerBase
    {
        private readonly IONGService _ongService;


        public ONGController(IONGService ongService)
        {
            _ongService = ongService;
        }

        [HttpGet("ong-voluntario/{ongId}")]
        public async Task<IActionResult> ObterONGVoluntarioInfo(int ongId)
        {
            try
            {
                var result = await _ongService.ObterONGVoluntarioInfo(ongId);

                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{ongId}")]
        public async Task<IActionResult> ObterONGById(int ongId)
        {
            try
            {
                var result = await _ongService.ObterONGById(ongId);

                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut]
        public async Task<IActionResult> AceitarVoluntario([Required] int voluntarioId, [Required] int ongId)
        {
            try
            {
                var result = await _ongService.AceitarVoluntario(voluntarioId, ongId);

                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete]
        public async Task<IActionResult> RemoverVoluntario([Required] int voluntarioId, [Required] int ongId)
        {
            try
            {
                var result = await _ongService.RemoverVoluntario(voluntarioId, ongId);

                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
