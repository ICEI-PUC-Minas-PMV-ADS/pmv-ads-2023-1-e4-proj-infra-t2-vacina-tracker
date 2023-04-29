using Microsoft.EntityFrameworkCore;

namespace vacina_tracker_v4.Models
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<UsuarioMembros>()
                .HasKey(c => new { c.UsuarioId, c.MembroId });

            builder.Entity<UsuarioMembros>()
                .HasOne(c => c.Usuario).WithMany(c => c.Membros)
                .HasForeignKey(c => c.UsuarioId);

            builder.Entity<UsuarioMembros>()
                .HasOne(c => c.Membro).WithMany(c => c.Usuarios)
                .HasForeignKey(c => c.MembroId);
        }

        public DbSet<Vacina> Vacinas { get; set; }       
        public DbSet<Membro> Membros { get; set; }
        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<UsuarioMembros> UsuariosMembros { get; set; }        
    }
}
