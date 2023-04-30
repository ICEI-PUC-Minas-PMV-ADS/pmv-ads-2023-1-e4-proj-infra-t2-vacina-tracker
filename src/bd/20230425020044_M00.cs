using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace vacina_tracker_v4.Migrations
{
    /// <inheritdoc />
    public partial class M00 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Membros",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NomeMembroFamilia = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    Idade = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Membros", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Vacinas",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NomeVacina = table.Column<int>(type: "int", nullable: false),
                    DataAplicacao = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Dose = table.Column<int>(type: "int", nullable: false),
                    DataProxAplicacao = table.Column<DateTime>(type: "datetime2", nullable: false),
                    MembroId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Vacinas", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Vacinas_Membros_MembroId",
                        column: x => x.MembroId,
                        principalTable: "Membros",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Vacinas_MembroId",
                table: "Vacinas",
                column: "MembroId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Vacinas");

            migrationBuilder.DropTable(
                name: "Membros");
        }
    }
}
