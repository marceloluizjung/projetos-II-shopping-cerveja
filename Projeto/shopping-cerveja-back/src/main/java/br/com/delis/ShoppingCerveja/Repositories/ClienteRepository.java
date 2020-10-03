package br.com.delis.ShoppingCerveja.Repositories;

import br.com.delis.ShoppingCerveja.Domain.Cliente;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClienteRepository extends CrudRepository<Cliente, Integer> {

}
