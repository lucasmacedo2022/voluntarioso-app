﻿namespace Application.Dto.Login
{
    public abstract class LoginDto
    {
        public string Email { get; set; } = string.Empty;
        public string Senha { get; set; } = string.Empty;
    }
}
