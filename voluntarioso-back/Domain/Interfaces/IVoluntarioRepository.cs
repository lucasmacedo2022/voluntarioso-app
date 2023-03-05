using Domain.Entities;

namespace Domain.Interfaces
{
    public interface IVoluntarioRepository
    {
        Task<List<ONG>> ObterONGs();
        Task CandidatarONG(int voluntario, int ongId);
    }
}
