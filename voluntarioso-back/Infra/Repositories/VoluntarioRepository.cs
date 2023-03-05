using Dapper;
using Domain.Entities;
using Domain.Interfaces;
using Infra.Context;
using Infra.DatabaseScripts;

namespace Infra.Repositories
{
    public class VoluntarioRepository : IVoluntarioRepository
    {
        private readonly DataContext _context;

        public VoluntarioRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<List<ONG>> ObterONGs()
        {
            using var conn = _context.CreateConnection();
            var sqlQuery = VoluntarioScripts.ObterONGS;

            var entities = (await conn.QueryAsync<ONG>(sqlQuery)).ToList();

            return entities;
        }

        public async Task CandidatarONG(int voluntarioId, int ongId)
        {
            using var conn = _context.CreateConnection();

            var sqlQuery = VoluntarioScripts.CandidatarONG;
            var parameters = new
            {
                ongId,
                voluntarioId,
                voluntarioAprovado = false
            };

            await conn.ExecuteAsync(sqlQuery, parameters);
        }
    }
}
