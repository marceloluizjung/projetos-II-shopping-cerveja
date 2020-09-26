package br.com.delis.ShoppingCerveja.Services.Interfaces;

import br.com.delis.ShoppingCerveja.Domain.Produto;

import java.util.List;

public interface IProdutoService {
    List<Produto> listarProdutos();
    Produto cadastrarProduto(Produto produto);
}
