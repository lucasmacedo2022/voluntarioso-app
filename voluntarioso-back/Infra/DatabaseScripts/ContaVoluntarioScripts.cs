namespace Infra.DatabaseScripts
{
	public class ContaVoluntarioScripts
	{
		public const string Login = @"
            SELECT *
            FROM Voluntarios
            WHERE VolunEmail LIKE @email AND VolunSenha LIKE @senha
        ";

		public const string Register = @"
            INSERT INTO Voluntarios
                (VolunEmail, VolunSenha, VolunNome, VolunCPF, VolunDataNascimento)
            VALUES 
                (@email, @senha, @nome, @cpf, @dataNascimento)
        ";
	}
}
