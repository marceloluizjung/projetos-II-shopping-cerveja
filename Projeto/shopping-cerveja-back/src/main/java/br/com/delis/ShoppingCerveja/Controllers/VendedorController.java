package br.com.delis.ShoppingCerveja.Controllers;

import br.com.delis.ShoppingCerveja.Domain.Vendedor;
import br.com.delis.ShoppingCerveja.Services.Interfaces.IVendedorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/vendedor")
public class VendedorController {

    @Autowired
    private IVendedorService vendedorService;

    @GetMapping("/listar")
    public List<Vendedor> listarVendedores() {
        return vendedorService.listarVendedores();
    }

    @GetMapping("/detalhar")
    public Optional<Vendedor> detalharVendedor(int id) {
        return vendedorService.detalharVendedor(id);
    }

    @PostMapping("/salvar")
    public Vendedor salvarVendedor(@RequestBody Vendedor vendedor) {
        return vendedorService.salvarVendedor(vendedor);
    }
}
