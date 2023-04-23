﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using vacina_tracker_1.Models;

#nullable disable

namespace vacina_tracker_1.Migrations
{
    [DbContext(typeof(AppDbContext))]
    partial class AppDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.4")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("vacina_tracker_1.Models.LinkDto", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Href")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Metodo")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Rel")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("VacinaId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("VacinaId");

                    b.ToTable("LinkDto");
                });

            modelBuilder.Entity("vacina_tracker_1.Models.Usuario", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Senha")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Usuário");
                });

            modelBuilder.Entity("vacina_tracker_1.Models.Vacina", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<DateTime>("DataAplicacao")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("DataProxAplicacao")
                        .HasColumnType("datetime2");

                    b.Property<int>("Dose")
                        .HasColumnType("int");

                    b.Property<int>("NomeVacina")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("Vacinas");
                });

            modelBuilder.Entity("vacina_tracker_1.Models.VacinaUsuarios", b =>
                {
                    b.Property<int>("VacinaId")
                        .HasColumnType("int");

                    b.Property<int>("UsuarioId")
                        .HasColumnType("int");

                    b.HasKey("VacinaId", "UsuarioId");

                    b.HasIndex("UsuarioId");

                    b.ToTable("Vacinas Usuários");
                });

            modelBuilder.Entity("vacina_tracker_1.Models.LinkDto", b =>
                {
                    b.HasOne("vacina_tracker_1.Models.Vacina", null)
                        .WithMany("Links")
                        .HasForeignKey("VacinaId");
                });

            modelBuilder.Entity("vacina_tracker_1.Models.VacinaUsuarios", b =>
                {
                    b.HasOne("vacina_tracker_1.Models.Usuario", "Usuario")
                        .WithMany("Vacina")
                        .HasForeignKey("UsuarioId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("vacina_tracker_1.Models.Vacina", "Vacina")
                        .WithMany("Usuario")
                        .HasForeignKey("VacinaId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Usuario");

                    b.Navigation("Vacina");
                });

            modelBuilder.Entity("vacina_tracker_1.Models.Usuario", b =>
                {
                    b.Navigation("Vacina");
                });

            modelBuilder.Entity("vacina_tracker_1.Models.Vacina", b =>
                {
                    b.Navigation("Links");

                    b.Navigation("Usuario");
                });
#pragma warning restore 612, 618
        }
    }
}
