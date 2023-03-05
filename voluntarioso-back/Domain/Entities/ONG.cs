namespace Domain.Entities
{
    public sealed class ONG
    {
        public int Id { get; set; }
        public string Email { get; set; } = string.Empty;
        public string Senha { get; set; } = string.Empty;
        public string Nome { get; set; } = string.Empty;
        public string CNPJ { get; set; } = string.Empty;
        public string Categoria { get; set; } = string.Empty;
        public string Missao { get; set; } = string.Empty;
        public string Acoes { get; set; } = string.Empty;
        public string Causa { get; set; } = string.Empty;
        public List<ONGVoluntario> OngVoluntarios { get; set; } = new();
        public List<Voluntario> Voluntarios { get; set; } = new();
    }
}
