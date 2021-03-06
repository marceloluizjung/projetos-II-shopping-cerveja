package br.com.delis.ShoppingCerveja.Controllers;

import br.com.delis.ShoppingCerveja.Domain.Produto;
import br.com.delis.ShoppingCerveja.Services.Interfaces.IProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping("/produto")
public class ProdutoController {

    @Autowired
    private IProdutoService produtoService;

    @GetMapping("/listar")
    public List<Produto> listarProdutos() {
        return produtoService.listarProdutos();
    }

    @GetMapping("/listar/{id}")
    public List<Produto> listarProdutosVendedor(@PathVariable int id) {
        return produtoService.listarProdutosVendedor(id);
    }

    @GetMapping("/detalhar/{id}")
    public Optional<Produto> detalharProduto(@PathVariable int id) {
        return produtoService.detalharProduto(id);
    }

    @PostMapping("/salvar")
    public Produto salvarProduto(@RequestBody Produto produto) {
        return produtoService.salvarProduto(produto);
    }

    @DeleteMapping("/excluir/{id}")
    public void deleteProduto(@PathVariable int id) {
        produtoService.excluirProduto(id);
    }
}
