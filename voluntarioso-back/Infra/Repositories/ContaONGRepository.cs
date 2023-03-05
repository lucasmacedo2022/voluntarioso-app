using Dapper;
using Domain.Entities;
using Domain.Interfaces;
using Infra.Context;
using Infra.DatabaseScripts;
using System.Text.Json;

namespace Infra.Repositories
{
    public class ContaONGRepository : IContaONGRepository
    {
        private readonly DataContext _context;

        public ContaONGRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<ONG> Login(ONG ongEntity)
        {
            using var conn = _context.CreateConnection();

            var sqlQuery = ContaONGScripts.Login;
            var parameters = new { email = ongEntity.Email, senha = ongEntity.Senha };

            var entity = await conn.QueryFirstAsync<ONG>(sqlQuery, parameters);

            return entity;
        }

        public async Task<bool> Register(ONG ongEntity)
        {
            using var conn = _context.CreateConnection();

            var sqlQuery = ContaONGScripts.Register;
            var parameters = new ONG
            {
                Nome = ongEntity.Nome,
                Email = ongEntity.Email,
                Senha = ongEntity.Senha,
                Categoria = ongEntity.Categoria,
                CNPJ = ongEntity.CNPJ,
                Missao = ongEntity.Missao,
                Acoes = ongEntity.Acoes,
                Causa = ongEntity.Causa,
            };

            var entity = await conn.ExecuteAsync(sqlQuery, parameters);

            return entity > 0;
        }
    }
}
