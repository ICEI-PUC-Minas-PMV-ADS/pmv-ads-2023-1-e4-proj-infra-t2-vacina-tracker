using api_mongo_vt.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace api_mongo_vt
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {

            services.AddControllers();

            services.AddScoped<VacinaContext>();

            services.AddSingleton<VacinaContext>();

            services.AddSingleton<IMongoClient>(new MongoClient(Configuration.GetConnectionString("MongoDB")));

            services.AddSingleton<IMongoClient>(new MongoClient(Configuration.GetConnectionString("DefaultConnection")));

            

        }

    }
}