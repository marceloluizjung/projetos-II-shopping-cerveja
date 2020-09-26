package br.com.delis.ShoppingCerveja.Controllers;

import br.com.delis.ShoppingCerveja.Domain.Cliente;
import br.com.delis.ShoppingCerveja.Services.IClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/cliente")
public class ClienteController {

    @Autowired
    private IClienteService clienteService;

    @GetMapping("/teste")
    public List<Cliente> listarClientes() {
        return clienteService.listarClientes();
    }
}
