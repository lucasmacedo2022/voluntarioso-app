namespace Domain.Entities
{
	public sealed class Voluntario
	{
		public int VolunId { get; set; }
		public string VolunEmail { get; set; } = string.Empty;
		public string VolunSenha { get; set; } = string.Empty;
		public string VolunNome { get; set; } = string.Empty;
		public string VolunCPF { get; set; } = string.Empty;
		public DateTime VolunDataNascimento { get; set; }
		public List<ONG>? Ongs { get; set; }
		public List<ONGVoluntario>? OngVoluntarios { get; set; }
	}
}
