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
        public NomeVacina NomeVacina { get; set; }

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
    
    public enum NomeVacina
    {
        [Display(Name = "BCG")]
        Bcg,
        [Display(Name = "Hepatite A")]
        HepatiteA,
        [Display(Name = "Hepatite B")]
        HepatiteB,
        [Display(Name = "Penta (DTP / Hib / Hep. B)")]
        Penta,
        [Display(Name = "Pneumocócica 10 valente")]
        Pneumocócica,
        [Display(Name = "Vacina Inativada Poliomielite (VIP)")]
        Vip,
        [Display(Name = "Vacina Oral Poliomielite (VOP)")]
        Vop,
        [Display(Name = "Vacina Rotavírus Humano (VRH)")]
        Vrh,
        [Display(Name = "Meningocócica C (conjugada)")]
        MeningC,
        [Display(Name = "Febre Amarela")]
        FebreAmarela,
        [Display(Name = "Tríplice Viral")]
        TripliceViral,
        [Display(Name = "Tetra Viral")]
        TetraViral,
        [Display(Name = "DTP (Tríplice Bacteriana)")]
        Dtp,
        [Display(Name = "Varicela")]
        Varicela,
        [Display(Name = "HPV quadrivalente")]
        Hpv,
        [Display(Name = "dT (Dupla Adulto)")]
        Dt,
        [Display(Name = "dTpa (DTP Adulto)")]
        Dtpa,
        [Display(Name = "Menigocócica ACWY")]
        Acwy,
        [Display(Name = "Covid-19")]
        Covid
    }
}
