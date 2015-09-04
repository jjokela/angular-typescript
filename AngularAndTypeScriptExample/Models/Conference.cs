using System.ComponentModel.DataAnnotations;

namespace AngularAndTypeScriptExample.Models
{
    public class Conference
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Description { get; set; }
        public int SpeakerId { get; set; }       
        public virtual Speaker Speaker { get; set; }
    }
}