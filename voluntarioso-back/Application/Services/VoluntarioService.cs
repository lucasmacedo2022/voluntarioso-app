using Application.Interfaces;
using Domain.Entities;
using Domain.Interfaces;

namespace Application.Services
{
    public class VoluntarioService : IVoluntarioService
    {
        private readonly IVoluntarioRepository _voluntarioRepository;

        public VoluntarioService(IVoluntarioRepository voluntarioRepository)
        {
            _voluntarioRepository = voluntarioRepository;
        }

        public async Task<List<ONG>> ObterONGs()
        {
            var result = await _voluntarioRepository.ObterONGs();

            return result;
        }

        public async Task CandidatarONG(int voluntarioId, int ongId)
        {
            await _voluntarioRepository.CandidatarONG(voluntarioId, ongId);
        }
    }
}
