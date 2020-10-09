package br.com.delis.ShoppingCerveja.Services.Interfaces;

import br.com.delis.ShoppingCerveja.Domain.Produto;

import java.util.List;
import java.util.Optional;

public interface IProdutoService {
    List<Produto> listarProdutos();
    Optional<Produto> detalharProduto(int id);
    Produto salvarProduto(Produto produto);
}
