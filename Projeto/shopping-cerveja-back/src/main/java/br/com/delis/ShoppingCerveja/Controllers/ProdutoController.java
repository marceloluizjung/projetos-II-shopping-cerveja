package br.com.delis.ShoppingCerveja.Controllers;

import br.com.delis.ShoppingCerveja.Domain.Produto;
import br.com.delis.ShoppingCerveja.Services.Interfaces.IProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/produto")
public class ProdutoController {

    @Autowired
    private IProdutoService produtoService;

    @GetMapping("/listar")
    public List<Produto> listarProdutos() {
        return produtoService.listarProdutos();
    }

    @PostMapping("/cadastrar")
    public Produto cadastrarCliente(@RequestBody Produto produto) {
        return produtoService.cadastrarProduto(produto);
    }
}
