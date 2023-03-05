using Application.Dto.Login;
using Application.Interfaces.Generics;
using Domain.Entities;

namespace Application.Interfaces
{
    public interface IContaVoluntarioService : IContaService<Voluntario, LoginVoluntarioDto>
    {
    }
}
