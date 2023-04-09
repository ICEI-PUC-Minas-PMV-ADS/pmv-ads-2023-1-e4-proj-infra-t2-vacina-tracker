using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace vacina_tracker_1.Models
{
    [Table("Vacinas")]
    public class Vacina : LinksHATEOS
    {

        [Key]
        public int Id { get; set; }

        [Required]
        public string NomeVacina { get; set; }

        [Required]
        public DateTime DataAplicacao { get; set; }

        [Required]
        public Dose Dose { get; set; }

        [Required]
        public DateTime DataProxAplicacao { get; set; }
                
        public ICollection<VacinaUsuarios> Usuario { get; set; }
    }

    public enum Dose
    {
        [Display(Name = "Dose Única")]
        DoseUnica,
        [Display(Name = "Primeira Dose")]
        PrimeiraDose,
        [Display(Name = "Segunda Dose")]
        SegundaDose,
        [Display(Name = "Terceira Dose")]
        TerceiraDose,
        [Display(Name = "Quarta Dose")]
        QuartaDose
    }
}
