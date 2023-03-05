using Dapper;
using Domain.Entities;
using Domain.Interfaces;
using Infra.Context;
using Infra.DatabaseScripts;

namespace Infra.Repositories
{
    public class ONGRepository : IONGRepository
    {
        private readonly DataContext _context;

        public ONGRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<List<ONG>> ObterONGVoluntarioInfo(int ongId)
        {
            using var conn = _context.CreateConnection();

            var sqlQuery = ONGScripts.ObterONGVoluntarioInfo;
            var parameters = new { ongId };

            var entities = await conn.QueryAsync<ONG, ONGVoluntario, Voluntario, ONG>
                (sqlQuery, (ong, ongVoluntario, voluntario) =>
                {
                    ong.OngVoluntarios.Add(ongVoluntario);
                    ong.Voluntarios.Add(voluntario);

                    return ong;
                }, parameters, splitOn: "ONGVolunId, VolunId");

            var result = entities.GroupBy(x => x.Id).Select(y =>
            {
                var groupedONG = y.First();
                groupedONG.OngVoluntarios = y.Select(z => z.OngVoluntarios.Single()).ToList();
                groupedONG.Voluntarios = y.Select(z => z.Voluntarios.Single()).ToList();

                return groupedONG;
            });

            return result.ToList();
        }

        public async Task<ONG> ObterONGById(int ongId)
        {
            using var conn = _context.CreateConnection();

            var sqlQuery = ONGScripts.ObterONGById;
            var parameters = new { ongId };

            var entity = await conn.QueryFirstAsync<ONG>(sqlQuery, parameters);

            return entity;
        }

        public async Task<bool> AceitarVoluntario(int voluntarioId, int ongId)
        {
            using var conn = _context.CreateConnection();

            var sqlQuery = ONGScripts.AceitarVoluntario;
            var parameters = new { ongId, voluntarioId };

            var result = await conn.ExecuteAsync(sqlQuery, parameters);

            return result > 0;
        }

        public async Task<bool> RemoverVoluntario(int voluntarioId, int ongId)
        {
            using var conn = _context.CreateConnection();

            var sqlQuery = ONGScripts.RemoverVoluntario;
            var parameters = new { ongId, voluntarioId };

            var result = await conn.ExecuteAsync(sqlQuery, parameters);

            return result > 0;
        }
    }
}
