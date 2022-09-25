using Microsoft.EntityFrameworkCore;

namespace CatBreed.Data
{
    public class DataContext : DbContext
    {
        public DataContext() { }

        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }

        public DbSet<CatBreed> CatBreeds => Set<CatBreed>();


    }
}
