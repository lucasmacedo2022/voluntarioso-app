using Application.Dto.Login;
using Application.Interfaces.Generics;
using Domain.Entities;

namespace Application.Interfaces
{
    public interface IContaONGService : IContaService<ONG, LoginONGDto>
    {
    }
}
