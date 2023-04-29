using System.ComponentModel.DataAnnotations;

namespace vacina_tracker_v4.Models
{
    public class UsuarioDto
    {
        public int? Id { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public string Senha { get; set; }
    }
}
