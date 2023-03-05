using Domain.Entities;
using FluentValidation;

namespace Application.Validation
{
	public class VoluntarioValidation : AbstractValidator<Voluntario>
	{
		public VoluntarioValidation()
		{
			ValidaEmail();
			ValidaSenha();
			ValidaNome();
			ValidaCPF();
			ValidaDataNascimento();
		}

		private void ValidaEmail()
		{
			RuleFor(x => x.VolunEmail)
				.NotEmpty().WithMessage("Email is required");
		}

		private void ValidaSenha()
		{
			RuleFor(x => x.VolunEmail)
				.NotEmpty().WithMessage("Senha is required");
		}

		private void ValidaNome()
		{
			RuleFor(x => x.VolunEmail)
				.NotEmpty().WithMessage("Nome is required");
		}

		private void ValidaCPF()
		{
			RuleFor(x => x.VolunEmail)
				.NotEmpty().WithMessage("CPF is required");
		}

		private void ValidaDataNascimento()
		{
			RuleFor(x => x.VolunEmail)
				.NotEmpty().WithMessage("DataNascimento is required");
		}
	}
}
