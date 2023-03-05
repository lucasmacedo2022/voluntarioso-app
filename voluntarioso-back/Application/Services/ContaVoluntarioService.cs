using Application.Dto.Login;
using Application.Interfaces;
using AutoMapper;
using Domain.Entities;
using Domain.Interfaces;

namespace Application.Services
{
    public class ContaVoluntarioService : IContaVoluntarioService
    {
        private readonly IMapper _mapper;
        private readonly IContaVoluntarioRepository _contaVoluntarioRepository;

        public ContaVoluntarioService(IMapper mapper, IContaVoluntarioRepository contaVoluntarioRepository)
        {
            _mapper = mapper;
            _contaVoluntarioRepository = contaVoluntarioRepository;
        }

        public async Task<Voluntario> Login(LoginVoluntarioDto entity)
        {
            var mappedEntity = _mapper.Map<Voluntario>(entity);
            var result = await _contaVoluntarioRepository.Login(mappedEntity);

            return result;
        }

        public async Task<bool> Register(Voluntario entity)
        {
            var result = await _contaVoluntarioRepository.Register(entity);

            return result;
        }
    }
}
