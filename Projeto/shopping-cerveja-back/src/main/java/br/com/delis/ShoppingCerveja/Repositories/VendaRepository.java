package br.com.delis.ShoppingCerveja.Repositories;

import br.com.delis.ShoppingCerveja.Domain.Cliente;
import br.com.delis.ShoppingCerveja.Domain.Venda;
import br.com.delis.ShoppingCerveja.Domain.Vendedor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VendaRepository extends CrudRepository<Venda, Integer> {
    List<Venda> findAllByCliente(Cliente cliente);

    List<Venda> findAllByVendedorOrderByDataCriacaoAsc(String vendedorId);
}
