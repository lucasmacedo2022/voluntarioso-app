using Domain.Entities;

namespace Application.Interfaces
{
    public interface IONGService
    {
        Task<List<ONG>> ObterONGVoluntarioInfo(int ongId);
        Task<ONG> ObterONGById(int ongId);
        Task<bool> AceitarVoluntario(int voluntarioId, int ongId);
        Task<bool> RemoverVoluntario(int voluntarioId, int id);
    }
}
