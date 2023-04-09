using System.ComponentModel.DataAnnotations.Schema;

namespace vacina_tracker_1.Models
{
    [Table("Vacinas Usuários")]
    public class VacinaUsuarios
    {
        public int VacinaId { get; set; }
        public Vacina Vacina { get; set; }

        public int UsuarioId { get; set; }
        public Usuario Usuario { get; set; }
    }
}
