using Microsoft.EntityFrameworkCore;

namespace vacina_tracker_1.Models
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<VacinaUsuarios>()
                .HasKey(c => new { c.VacinaId, c.UsuarioId });

            builder.Entity<VacinaUsuarios>()
                .HasOne(c => c.Vacina).WithMany(c => c.Usuario)
                .HasForeignKey(c => c.VacinaId);

            builder.Entity<VacinaUsuarios>()
                .HasOne(c => c.Usuario).WithMany(c => c.Vacina)
                .HasForeignKey(c => c.UsuarioId);
        }
        

        public DbSet<Vacina> Vacina { get; set; }
        public DbSet<Usuario> Usuario { get; set; }
        public DbSet<VacinaUsuarios> VacinaUsuarios { get; set; }
    }
}
