package com.xLanche.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "produto")
public class Produto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nome;

    @Column(nullable = false)
    private String descricao;

    @Column(nullable = false)
    private Double preco;

    @Column(name = "imagem_url") // Nome da coluna no banco
    private String imagemUrl;
}
