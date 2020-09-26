package br.com.delis.ShoppingCerveja.Controllers;

import br.com.delis.ShoppingCerveja.Domain.Vendedor;
import br.com.delis.ShoppingCerveja.Services.IVendedorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/vendedor")
public class VendedorController {

    @Autowired
    private IVendedorService vendedorService;

    @GetMapping("/teste")
    public Vendedor[] listarVendedores() {
        return vendedorService.listarVendedores();
    }
}
