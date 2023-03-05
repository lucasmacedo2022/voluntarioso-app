using Application.Dto.Login;
using Application.Interfaces;
using AutoMapper;
using Domain.Entities;
using Domain.Interfaces;

namespace Application.Services
{
    public class ContaONGService : IContaONGService
    {
        private readonly IMapper _mapper;
        private readonly IContaONGRepository _loginONGRepository;

        public ContaONGService(IMapper mapper, IContaONGRepository loginONGRepository)
        {
            _mapper = mapper;
            _loginONGRepository = loginONGRepository;
        }

        public async Task<ONG> Login(LoginONGDto entity)
        {
            var mappedEntity = _mapper.Map<ONG>(entity);
            var result = await _loginONGRepository.Login(mappedEntity);

            return result;
        }

        public async Task<bool> Register(ONG entity)
        {
            var result = await _loginONGRepository.Register(entity);

            return result;
        }
    }
}
