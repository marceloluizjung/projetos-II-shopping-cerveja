package br.com.delis.ShoppingCerveja.Controllers;

import br.com.delis.ShoppingCerveja.Domain.Produto;
import br.com.delis.ShoppingCerveja.Services.IProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/produto")
public class ProdutoController {

    @Autowired
    private IProdutoService produtoService;

    @GetMapping("/teste")
    public Produto[] listarProdutos() {
        return produtoService.listarProdutos();
    }
}
