namespace Domain.Interfaces.Generics
{
    public interface IContaRepository<T> where T : class
    {
        public Task<T> Login(T entity);
        public Task<bool> Register(T entity);
    }
}
