using Application.Interfaces;
using Domain.Entities;
using Domain.Interfaces;

namespace Application.Services
{
    public class ONGService : IONGService
    {
        private readonly IONGRepository _ongRepository;

        public ONGService(IONGRepository ongRepository)
        {
            _ongRepository = ongRepository;
        }

        public async Task<List<ONG>> ObterONGVoluntarioInfo(int ongId)
        {
            var result = await _ongRepository.ObterONGVoluntarioInfo(ongId);

            return result;
        }
        
        public async Task<ONG> ObterONGById(int ongId)
        {
            var result = await _ongRepository.ObterONGById(ongId);

            return result;
        }

        public async Task<bool> AceitarVoluntario(int voluntarioId, int ongId)
        {
            var result = await _ongRepository.AceitarVoluntario(voluntarioId, ongId);

            return result;
        }

        public async Task<bool> RemoverVoluntario(int voluntarioId, int ongId)
        {
            var result = await _ongRepository.RemoverVoluntario(voluntarioId, ongId);

            return result;
        }
    }
}
