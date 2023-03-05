using Application.Dto.Login;
using AutoMapper;
using Domain.Entities;

namespace Application.AutoMapper
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<LoginONGDto, ONG>();
            CreateMap<LoginVoluntarioDto, Voluntario>()
                .ForMember(x => x.VolunEmail, opt => opt.MapFrom(x => x.Email))
                .ForMember(x => x.VolunSenha, opt => opt.MapFrom(x => x.Senha));
        }
    }
}
