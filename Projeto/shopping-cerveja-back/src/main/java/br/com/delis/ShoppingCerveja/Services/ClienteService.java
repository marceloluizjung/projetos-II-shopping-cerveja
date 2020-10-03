package br.com.delis.ShoppingCerveja.Services;

import br.com.delis.ShoppingCerveja.Domain.Cliente;
import br.com.delis.ShoppingCerveja.Domain.Venda;
import br.com.delis.ShoppingCerveja.Repositories.ClienteRepository;
import br.com.delis.ShoppingCerveja.Repositories.VendaRepository;
import br.com.delis.ShoppingCerveja.Services.Interfaces.IClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class ClienteService implements IClienteService {

    @Autowired
    private ClienteRepository clienteRepository;

    @Autowired
    private VendaRepository vendaRepository;

    @Override
    public List<Cliente> listarClientes() {
        return (List<Cliente>) clienteRepository.findAll();
    }

    @Override
    public Optional<Cliente> detalharCliente(int id) {
        return clienteRepository.findById(id);
    }

    @Override
    public List<Venda> listarComprasCliente(Cliente cliente) {
        return vendaRepository.findAllByCliente(cliente);
    }

    @Override
    public Cliente salvarCliente(Cliente cliente) {
        return clienteRepository.save(cliente);
    }
}
