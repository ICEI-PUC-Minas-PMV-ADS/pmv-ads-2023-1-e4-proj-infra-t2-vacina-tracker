using MongoDB.Driver;
using api_mongo_vt.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace api_mongo_vt.Models
{
    public class VacinaContext
    {
        private readonly IMongoDatabase _database;

        public VacinaContext(IConfiguration config)
        {
            var client = new MongoClient(config.GetConnectionString("VacinaDB"));
            _database = client.GetDatabase("VacinaDB");

            // Insere dados prévios na coleção Vacinas
            
            var vacinas = new List<Vacina>
        {
            new Vacina { Nome = "BCG" },
            new Vacina { Nome = "Hepatite A" },
            new Vacina { Nome = "Hepatite B" },
            new Vacina { Nome = "Penta (DTP / Hib / Hep. B)" },
            new Vacina { Nome = "Pneumocócica 10 valente" },
            new Vacina { Nome = "Vacina Inativada Poliomielite (VIP)" },
            new Vacina { Nome = "Vacina Oral Poliomielite (VOP)" },
            new Vacina { Nome = "Vacina Rotavírus Humano (VRH)" },
            new Vacina { Nome = "Meningocócica C (conjugada)" },
            new Vacina { Nome = "Febre Amarela" },
            new Vacina { Nome = "Tetra Viral" },
            new Vacina { Nome = "DTP (Tríplice Bacteriana)" },
            new Vacina { Nome = "Varicela" },
            new Vacina { Nome = "HPV quadrivalente" },
            new Vacina { Nome = "dT (Dupla Adulto)" },
            new Vacina { Nome = "dTpa (DTP Adulto)" },
            new Vacina { Nome = "Menigocócica ACWY" },
            new Vacina { Nome = "Covid-19" }
        };

            var vacinasCollection = _database.GetCollection<Vacina>("Vacinas");
            vacinasCollection.InsertMany(vacinas); 
        }

        public IMongoCollection<Vacina> Vacinas => _database.GetCollection<Vacina>("Vacinas");
    }
}
