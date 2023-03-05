using Application.Dto.Login;
using FluentValidation;

namespace Application.Validation
{
    public class ContaVoluntarioValidation : AbstractValidator<LoginVoluntarioDto>
    {
        public ContaVoluntarioValidation()
        {
            ValidaEmail();
            ValidaSenha();
        }

        private void ValidaEmail()
        {
            RuleFor(x => x.Email)
                .NotEmpty().WithMessage("Email is required");
        }
        
        private void ValidaSenha()
        {
            RuleFor(x => x.Senha)
                .NotEmpty().WithMessage("Senha is required");
        }
    }
}
