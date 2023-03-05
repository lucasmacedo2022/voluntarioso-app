using Domain.Entities;

namespace Application.Interfaces
{
    public interface IVoluntarioService
    {
        Task<List<ONG>> ObterONGs();
        Task CandidatarONG(int voluntarioId, int ongId);
    }
}
