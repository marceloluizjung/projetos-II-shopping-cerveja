package br.com.delis.ShoppingCerveja.Services.Interfaces;

import br.com.delis.ShoppingCerveja.Domain.Cliente;

import java.util.List;

public interface IClienteService {
    List<Cliente> listarClientes();
    Cliente cadastrarCliente(Cliente cliente);
}
