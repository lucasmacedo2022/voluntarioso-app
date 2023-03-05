using Domain.Entities;
using FluentValidation;

namespace Application.Validation
{
    public class ONGValidation : AbstractValidator<ONG>
    {
        public ONGValidation()
        {
            ValidaEmail();
            ValidaSenha();
            ValidaNome();
            ValidaCNPJ();
            ValidaCategoria();
            ValidaMissao();
            ValidaAcoes();
            ValidaCausa();
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

        private void ValidaNome()
        {
            RuleFor(x => x.Nome)
                .NotEmpty().WithMessage("Nome is required");
        }

        private void ValidaCNPJ()
        {
            RuleFor(x => x.CNPJ)
                .NotEmpty().WithMessage("CNPJ is required");
        }

        private void ValidaCategoria()
        {
            RuleFor(x => x.Categoria)
                .NotEmpty().WithMessage("Categoria is required");
        }
        
        private void ValidaMissao()
        {
            RuleFor(x => x.Missao)
                .NotEmpty().WithMessage("Missao is required");
        }

        private void ValidaAcoes()
        {
            RuleFor(x => x.Acoes)
                .NotEmpty().WithMessage("Acoes is required");
        }

        private void ValidaCausa()
        {
            RuleFor(x => x.Causa)
                .NotEmpty().WithMessage("Causa is required");
        }
    }
}
