package br.com.delis.ShoppingCerveja.Services.Interfaces;

import br.com.delis.ShoppingCerveja.Domain.Produto;
import br.com.delis.ShoppingCerveja.Domain.Vendedor;

import java.util.List;
import java.util.Optional;

public interface IProdutoService {
    List<Produto> listarProdutos();
    List<Produto> listarProdutosVendedor(int idVendedor);
    Optional<Produto> detalharProduto(int id);
    Produto salvarProduto(Produto produto);
    void excluirProduto(int id);
}
