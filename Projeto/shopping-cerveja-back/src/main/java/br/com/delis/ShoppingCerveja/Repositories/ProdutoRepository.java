package br.com.delis.ShoppingCerveja.Repositories;

import br.com.delis.ShoppingCerveja.Domain.Produto;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProdutoRepository extends CrudRepository<Produto, Integer> {
}
