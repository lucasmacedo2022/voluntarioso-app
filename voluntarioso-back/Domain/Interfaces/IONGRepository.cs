using Domain.Entities;

namespace Domain.Interfaces
{
    public interface IONGRepository
    {
        Task<List<ONG>> ObterONGVoluntarioInfo(int ongId);
        Task<ONG> ObterONGById(int ongId);
        Task<bool> AceitarVoluntario(int voluntarioId, int ongId);
        Task<bool> RemoverVoluntario(int voluntarioId, int ongId);
    }
}
