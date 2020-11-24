package br.com.delis.ShoppingCerveja.Controllers;

import br.com.delis.ShoppingCerveja.Domain.Venda;
import br.com.delis.ShoppingCerveja.Services.Interfaces.IVendaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/venda")
public class VendaController {
    @Autowired
    private IVendaService vendaService;

    @PostMapping("/efetuar")
    public Venda efetuarVenda(@RequestBody Venda venda) {
        return vendaService.efetuarVenda(venda);
    }

    @GetMapping("/listar/{id}")
    public List<Venda> detalhar(@PathVariable String id) {
        return vendaService.listarVendasByVendedor(id);
    }
}
