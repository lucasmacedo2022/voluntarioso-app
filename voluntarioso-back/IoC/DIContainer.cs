using Application.AutoMapper;
using Application.Dto.Login;
using Application.Interfaces;
using Application.Services;
using Application.Validation;
using Domain.Entities;
using Domain.Interfaces;
using FluentValidation;
using Infra.Context;
using Infra.Repositories;
using Microsoft.Extensions.DependencyInjection;

namespace IoC
{
    public static class DIContainer
    {
        public static IServiceCollection StartServices(this IServiceCollection services)
        {
            services.AddSingleton<DataContext>();

            services.AddAutoMapper(typeof(MappingProfile));

            services.AddScoped<IContaONGRepository, ContaONGRepository>();
            services.AddScoped<IContaVoluntarioRepository, ContaVoluntarioRepository>();
            services.AddScoped<IONGRepository, ONGRepository>();
            services.AddScoped<IVoluntarioRepository, VoluntarioRepository>();

            services.AddScoped<IContaONGService, ContaONGService>();
            services.AddScoped<IContaVoluntarioService, ContaVoluntarioService>();
            services.AddScoped<IONGService, ONGService>();
            services.AddScoped<IVoluntarioService, VoluntarioService>();

            services.AddScoped<IValidator<LoginVoluntarioDto>, ContaVoluntarioValidation>();
            services.AddScoped<IValidator<LoginONGDto>, ContaONGValidation>();
            services.AddScoped<IValidator<Voluntario>, VoluntarioValidation>();
            services.AddScoped<IValidator<ONG>, ONGValidation>();

            return services;
        }
    }
}
