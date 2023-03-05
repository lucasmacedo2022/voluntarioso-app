using Dapper;
using Domain.Entities;
using Domain.Interfaces;
using Infra.Context;
using Infra.DatabaseScripts;

namespace Infra.Repositories
{
	public class ContaVoluntarioRepository : IContaVoluntarioRepository
	{
		private readonly DataContext _context;

		public ContaVoluntarioRepository(DataContext context)
		{
			_context = context;
		}

		public async Task<Voluntario> Login(Voluntario volEntity)
		{
			using var conn = _context.CreateConnection();

			var sqlQuery = ContaVoluntarioScripts.Login;
			var parameters = new { email = volEntity.VolunEmail, senha = volEntity.VolunSenha };

			var entity = await conn.QueryFirstAsync<Voluntario>(sqlQuery, parameters);

			return entity;
		}

		public async Task<bool> Register(Voluntario volEntity)
		{
			using var conn = _context.CreateConnection();

			var sqlQuery = ContaVoluntarioScripts.Register;
			var parameters = new 
			{
                nome = volEntity.VolunNome,
                email = volEntity.VolunEmail,
				senha = volEntity.VolunSenha,
                cpf = volEntity.VolunCPF,
                dataNascimento = volEntity.VolunDataNascimento,
			};

			var entity = await conn.ExecuteAsync(sqlQuery, parameters);

			return entity > 0;
		}
	}
}
