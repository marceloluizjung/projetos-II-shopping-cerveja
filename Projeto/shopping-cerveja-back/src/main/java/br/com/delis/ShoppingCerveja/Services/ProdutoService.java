package br.com.delis.ShoppingCerveja.Services;

import br.com.delis.ShoppingCerveja.Domain.Produto;
import org.springframework.stereotype.Service;

@Service
public class ProdutoService implements IProdutoService {

    @Override
    public Produto[] listarProdutos() {
        Produto[] produtos = new Produto[2];

        produtos[0] = new Produto();
        produtos[1] = new Produto();

        return produtos;
    }
}
