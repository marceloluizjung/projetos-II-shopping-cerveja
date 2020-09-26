package br.com.delis.ShoppingCerveja.Services;

import br.com.delis.ShoppingCerveja.Domain.Cliente;
import br.com.delis.ShoppingCerveja.Repositories.ClienteRepository;
import br.com.delis.ShoppingCerveja.Services.Interfaces.IClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ClienteService implements IClienteService {

    @Autowired
    private ClienteRepository clienteRepository;

    @Override
    public List<Cliente> listarClientes() {
        return (List<Cliente>) clienteRepository.findAll();
    }

    @Override
    public Cliente cadastrarCliente(Cliente cliente) {
        return clienteRepository.save(cliente);
    }
}
