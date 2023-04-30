using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace vacina_tracker_v4.Migrations
{
    /// <inheritdoc />
    public partial class M02 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Usuários",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Senha = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Usuários", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Usuário Membros",
                columns: table => new
                {
                    UsuarioId = table.Column<int>(type: "int", nullable: false),
                    MembroId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Usuário Membros", x => new { x.UsuarioId, x.MembroId });
                    table.ForeignKey(
                        name: "FK_Usuário Membros_Membros_MembroId",
                        column: x => x.MembroId,
                        principalTable: "Membros",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Usuário Membros_Usuários_UsuarioId",
                        column: x => x.UsuarioId,
                        principalTable: "Usuários",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Usuário Membros_MembroId",
                table: "Usuário Membros",
                column: "MembroId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Usuário Membros");

            migrationBuilder.DropTable(
                name: "Usuários");
        }
    }
}
