package br.com.delis.ShoppingCerveja.Controllers;

import br.com.delis.ShoppingCerveja.Domain.Vendedor;
import br.com.delis.ShoppingCerveja.Services.Interfaces.IVendedorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/vendedor")
public class VendedorController {

    @Autowired
    private IVendedorService vendedorService;

    @GetMapping("/listar")
    public List<Vendedor> listarVendedores() {
        return vendedorService.listarVendedores();
    }

    @PostMapping("/cadastrar")
    public Vendedor cadastrarVendedor(@RequestBody Vendedor vendedor) {
        return vendedorService.cadastrarVendedor(vendedor);
    }
}
