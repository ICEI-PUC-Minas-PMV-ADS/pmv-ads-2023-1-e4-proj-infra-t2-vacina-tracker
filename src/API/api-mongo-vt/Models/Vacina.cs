using MongoDB.Bson;
using MongoDB.Driver;


namespace api_mongo_vt.Models
{
    public class Vacina
    {
        public ObjectId Id { get; set; }
        public string Nome { get; set; }
    }
}
