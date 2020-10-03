package br.com.delis.ShoppingCerveja.Services.Interfaces;

import br.com.delis.ShoppingCerveja.Domain.Cliente;
import br.com.delis.ShoppingCerveja.Domain.Venda;

import java.util.List;
import java.util.Optional;

public interface IClienteService {
    List<Cliente> listarClientes();
    Optional<Cliente> detalharCliente(int id);
    List<Venda> listarComprasCliente(Cliente cliente);
    Cliente salvarCliente(Cliente cliente);
}
