package br.com.delis.ShoppingCerveja.Services;

import br.com.delis.ShoppingCerveja.Domain.Produto;
import br.com.delis.ShoppingCerveja.Domain.Vendedor;
import br.com.delis.ShoppingCerveja.Repositories.ProdutoRepository;
import br.com.delis.ShoppingCerveja.Services.Interfaces.IProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProdutoService implements IProdutoService {

    @Autowired
    private ProdutoRepository produtoRepository;

    @Override
    public List<Produto> listarProdutos() {
        return (List<Produto>) produtoRepository.findAll();
    }

    @Override
    public List<Produto> listarProdutosVendedor(int idVendedor) {
        Vendedor vendedor = new Vendedor();
        vendedor.setId(idVendedor);
        return (List<Produto>) produtoRepository.findAllByVendedor(vendedor);
    }

    @Override
    public Optional<Produto> detalharProduto(int id) {
        return produtoRepository.findById(id);
    }

    @Override
    public Produto salvarProduto(Produto produto) {
        return produtoRepository.save(produto);
    }

    @Override
    public void excluirProduto(int id) {
        produtoRepository.deleteById(id);
    }
}
