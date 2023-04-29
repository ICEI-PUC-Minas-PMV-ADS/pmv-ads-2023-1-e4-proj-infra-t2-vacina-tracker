using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace vacina_tracker_v4.Models
{
    [Table("Membros")]
    public class Membro : LinksHATEOS
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = ("Obrigatório informar o Nome"))]        
        public string NomeMembroFamilia { get; set; }

        [Required(ErrorMessage = ("Obrigatório informar a idade"))]
        public int Idade { get; set; }


        [Required]
        public int VacinaId { get; set; } 

        public Vacina Vacinas { get; set; } //navegação virtual

        //public ICollection<Vacina> Vacinas { get; set; } //1 membro está associado a várias vacinas

        public ICollection<UsuarioMembros> Usuarios { get; set; } //membro pode estar associado a vários usuários
    }
}
