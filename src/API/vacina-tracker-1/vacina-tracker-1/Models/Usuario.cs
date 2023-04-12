using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace vacina_tracker_1.Models
{
    [Table("Usuário")]
    public class Usuario
    {
        [Key]
        public int Id { get; set; }

        [Display(Name = "Nome Completo")]
        [Required(ErrorMessage = ("Obrigatório informar o nome completo"))]
        public string Nome { get; set; }

        [Required(ErrorMessage = ("Obrigatório informar o email"))]
        public string Email { get; set; }

        [Required(ErrorMessage = ("Obrigatório informar senha"))]
        [JsonIgnore]
        public string Senha { get; set; }

        [Required]
        [Display(Name = "Perfil do Usuário")]
        public PerfilUsuario PerfilUsuario { get; set; }

        public ICollection<VacinaUsuarios> Vacina { get; set; }
    }

    public enum PerfilUsuario
    {
        [Display(Name = "Administrador")]
        TipoAdministrador,
        [Display(Name = "Usuário Responsável")]
        TipoResponsavel,
        [Display(Name = "Usuário Dependente")]
        TipoDependente
    }
}