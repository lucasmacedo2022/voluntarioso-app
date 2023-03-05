using Application.Dto.Login;
using Application.Interfaces;
using Domain.Entities;
using FluentValidation;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContaONGController : ControllerBase
    {
        private readonly IContaONGService _contaONGService;
        private readonly IValidator<ONG> _ongValidator;
        private readonly IValidator<LoginONGDto> _loginONGValidator;

        public ContaONGController(IContaONGService contaONGService, 
            IValidator<ONG> ongValidator, 
            IValidator<LoginONGDto> loginONGValidator)
        {
            _contaONGService = contaONGService;
            _ongValidator = ongValidator;
            _loginONGValidator = loginONGValidator;
        }

        [HttpPost]
        [Route("register")]
        public async Task<IActionResult> Register(ONG ong)
        {
            try
            {
                var validatorResult = _ongValidator.Validate(ong);

                if (!validatorResult.IsValid)
                    return BadRequest(validatorResult.Errors.ToString());

                var result = await _contaONGService.Register(ong);

                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login(LoginONGDto loginONGDto)
        {
            try
            {
                var validatorResult = _loginONGValidator.Validate(loginONGDto);

                if (!validatorResult.IsValid)
                    return BadRequest(validatorResult.Errors);

                var result = await _contaONGService.Login(loginONGDto);

                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
