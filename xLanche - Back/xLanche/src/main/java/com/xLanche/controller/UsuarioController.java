package com.xLanche.controller;

import com.xLanche.model.Usuario;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/usuarios")
public class UsuarioController {

    //Lista fixa
    private final List<Usuario> usuarios = Arrays.asList(
            new Usuario(1L, "Edney", "edney@xlanches.com", "123", "ADMIN"),
            new Usuario(2L, "Maria", "maria@xlanches.com", "456", "USER")
    );

    // GET /api/usuarios → retorna todos
    @GetMapping
    public List<Usuario> listarUsuarios() {
        return usuarios;
    }

    // POST /api/usuarios/login → valida email e senha
    @PostMapping("/login")
    public ResponseEntity<Usuario> login(@RequestBody Usuario usuario) {
        for (Usuario u : usuarios) {
            if (u.getEmail().equals(usuario.getEmail()) &&
                    u.getSenha().equals(usuario.getSenha())) {
                return ResponseEntity.ok(u); // retorna o usuário logado
            }
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build(); // credenciais inválidas
    }

}
