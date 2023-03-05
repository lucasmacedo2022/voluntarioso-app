namespace Application.Interfaces.Generics
{
    public interface IContaService<T1, T2> 
        where T1 : class 
        where T2 : class
    {
        public Task<T1> Login(T2 entity);
        public Task<bool> Register(T1 entity);
    }
}
