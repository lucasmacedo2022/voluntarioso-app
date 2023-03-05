using Application.Dto.Login;
using Application.Interfaces;
using Domain.Entities;
using FluentValidation;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContaVoluntarioController : ControllerBase
    {
        private readonly IContaVoluntarioService _contaVoluntarioService;
        private readonly IValidator<Voluntario> _voluntarioValidator;
        private readonly IValidator<LoginVoluntarioDto> _loginVoluntarioValidator;

        public ContaVoluntarioController(IContaVoluntarioService contaVoluntarioService, 
            IValidator<Voluntario> voluntarioValidator, 
            IValidator<LoginVoluntarioDto> loginVoluntarioValidator)
        {
            _contaVoluntarioService = contaVoluntarioService;
            _voluntarioValidator = voluntarioValidator;
            _loginVoluntarioValidator = loginVoluntarioValidator;
        }

        [HttpPost]
        [Route("register")]
        public async Task<IActionResult> Register(Voluntario voluntario)
        {
            try
            {
                var validatorResult = _voluntarioValidator.Validate(voluntario);

                if (!validatorResult.IsValid)
                    return BadRequest(validatorResult.Errors);

                var result = await _contaVoluntarioService.Register(voluntario);

                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login(LoginVoluntarioDto loginVoluntarioDto)
        {
            try
            {
                var validatorResult = _loginVoluntarioValidator.Validate(loginVoluntarioDto);

                if (!validatorResult.IsValid)
                    return BadRequest(validatorResult.Errors);

                var result = await _contaVoluntarioService.Login(loginVoluntarioDto);

                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
