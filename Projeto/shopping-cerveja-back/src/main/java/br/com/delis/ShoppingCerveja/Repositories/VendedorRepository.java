package br.com.delis.ShoppingCerveja.Repositories;

import br.com.delis.ShoppingCerveja.Domain.Vendedor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VendedorRepository extends CrudRepository<Vendedor, Integer> {
}
