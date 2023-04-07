using Microsoft.EntityFrameworkCore;

namespace vacina_tracker_1.Models
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions options) : base(options)
        {

        }

        /*protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<VacinasUsuarios>()
                .HasKey(c => new { c.VacinaId, c.ResponsavelId });

            builder.Entity<VacinasUsuarios>()
                .HasOne(c => c.Vacina).WithMany(c => c.Responsavel)
                .HasForeignKey(c => c.VacinaId);

            builder.Entity<VacinasUsuarios>()
                .HasOne(c => c.Responsavel).WithMany(c => c.Vacina)
                .HasForeignKey(c => c.ResponsavelId);
        }
        */

        public DbSet<Vacina> Vacina { get; set; }
        //public DbSet<Responsavel> Responsavel { get; set; }
        //public DbSet<VacinasUsuarios> VacinasUsuarios { get; set; }
    }
}
