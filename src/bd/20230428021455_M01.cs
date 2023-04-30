using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace vacina_tracker_v4.Migrations
{
    /// <inheritdoc />
    public partial class M01 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Vacinas_Membros_MembroId",
                table: "Vacinas");

            migrationBuilder.DropIndex(
                name: "IX_Vacinas_MembroId",
                table: "Vacinas");

            migrationBuilder.DropColumn(
                name: "MembroId",
                table: "Vacinas");

            migrationBuilder.AlterColumn<string>(
                name: "NomeMembroFamilia",
                table: "Membros",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(30)",
                oldMaxLength: 30);

            migrationBuilder.AddColumn<int>(
                name: "VacinaId",
                table: "Membros",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Membros_VacinaId",
                table: "Membros",
                column: "VacinaId");

            migrationBuilder.AddForeignKey(
                name: "FK_Membros_Vacinas_VacinaId",
                table: "Membros",
                column: "VacinaId",
                principalTable: "Vacinas",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Membros_Vacinas_VacinaId",
                table: "Membros");

            migrationBuilder.DropIndex(
                name: "IX_Membros_VacinaId",
                table: "Membros");

            migrationBuilder.DropColumn(
                name: "VacinaId",
                table: "Membros");

            migrationBuilder.AddColumn<int>(
                name: "MembroId",
                table: "Vacinas",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AlterColumn<string>(
                name: "NomeMembroFamilia",
                table: "Membros",
                type: "nvarchar(30)",
                maxLength: 30,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.CreateIndex(
                name: "IX_Vacinas_MembroId",
                table: "Vacinas",
                column: "MembroId");

            migrationBuilder.AddForeignKey(
                name: "FK_Vacinas_Membros_MembroId",
                table: "Vacinas",
                column: "MembroId",
                principalTable: "Membros",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
