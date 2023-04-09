using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace vacina_tracker_1.Migrations
{
    /// <inheritdoc />
    public partial class M01 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Usuário",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nome = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Senha = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PerfilUsuario = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Usuário", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Vacinas Usuários",
                columns: table => new
                {
                    VacinaId = table.Column<int>(type: "int", nullable: false),
                    UsuarioId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Vacinas Usuários", x => new { x.VacinaId, x.UsuarioId });
                    table.ForeignKey(
                        name: "FK_Vacinas Usuários_Usuário_UsuarioId",
                        column: x => x.UsuarioId,
                        principalTable: "Usuário",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Vacinas Usuários_Vacinas_VacinaId",
                        column: x => x.VacinaId,
                        principalTable: "Vacinas",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

           migrationBuilder.CreateIndex(
                name: "IX_Vacinas Usuários_UsuarioId",
                table: "Vacinas Usuários",
                column: "UsuarioId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
           migrationBuilder.DropTable(
                name: "Vacinas Usuários");

            migrationBuilder.DropTable(
                name: "Usuário");
        }
    }
}
