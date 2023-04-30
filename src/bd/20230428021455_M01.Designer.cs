﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using vacina_tracker_v4.Models;

#nullable disable

namespace vacina_tracker_v4.Migrations
{
    [DbContext(typeof(AppDbContext))]
    [Migration("20230428021455_M01")]
    partial class M01
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.5")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("vacina_tracker_v4.Models.Membro", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int>("Idade")
                        .HasColumnType("int");

                    b.Property<string>("NomeMembroFamilia")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("VacinaId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("VacinaId");

                    b.ToTable("Membros");
                });

            modelBuilder.Entity("vacina_tracker_v4.Models.Vacina", b =>
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

            modelBuilder.Entity("vacina_tracker_v4.Models.Membro", b =>
                {
                    b.HasOne("vacina_tracker_v4.Models.Vacina", "Vacinas")
                        .WithMany("Membros")
                        .HasForeignKey("VacinaId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Vacinas");
                });

            modelBuilder.Entity("vacina_tracker_v4.Models.Vacina", b =>
                {
                    b.Navigation("Membros");
                });
#pragma warning restore 612, 618
        }
    }
}
