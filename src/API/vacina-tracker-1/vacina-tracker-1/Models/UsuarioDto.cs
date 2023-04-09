using System.ComponentModel.DataAnnotations;

namespace vacina_tracker_1.Models
{
    public class UsuarioDto
    {
        public int? Id { get; set; }

        [Required]
        public string Nome { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public string Senha { get; set; }

        [Required]        
        public PerfilUsuario PerfilUsuario { get; set; }
    }
}
