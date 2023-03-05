namespace Infra.DatabaseScripts
{
    public class ContaONGScripts
    {
        public const string Login = @"
            SELECT * 
            FROM ONGs
            WHERE Email LIKE @email AND Senha LIKE @senha
        ";
        
        public const string Register = @"
            INSERT INTO ONGs
                (Email, Senha, Nome, CNPJ, Categoria, Missao, Acoes, Causa)
            VALUES 
                (@email, @senha, @nome, @cnpj, @categoria, @missao, @acoes, @causa)
        ";
    }
}
