using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace vacina_tracker_1.Migrations
{
    /// <inheritdoc />
    public partial class M02 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Nome",
                table: "Usuário");

            migrationBuilder.DropColumn(
                name: "PerfilUsuario",
                table: "Usuário");

            migrationBuilder.AlterColumn<int>(
                name: "NomeVacina",
                table: "Vacinas",
                type: "int",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "NomeVacina",
                table: "Vacinas",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<string>(
                name: "Nome",
                table: "Usuário",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "PerfilUsuario",
                table: "Usuário",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
