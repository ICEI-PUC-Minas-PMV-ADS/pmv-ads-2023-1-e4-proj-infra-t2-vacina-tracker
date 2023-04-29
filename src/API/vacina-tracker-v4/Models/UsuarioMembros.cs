using System.ComponentModel.DataAnnotations.Schema;

namespace vacina_tracker_v4.Models
{
    [Table("Usuário Membros")]
    public class UsuarioMembros // tabela de relacionamento - só é preciso ter as forenkeys
    {
        public int UsuarioId { get; set; }
        public Usuario Usuario { get; set; } //navegação virtual

        public int MembroId { get; set; }
        public Membro Membro { get; set; } //navegação virtual
    }
}
