package br.com.delis.ShoppingCerveja.Services.Interfaces;

import br.com.delis.ShoppingCerveja.Domain.Venda;
import br.com.delis.ShoppingCerveja.Domain.Vendedor;

import java.util.List;
import java.util.Optional;

public interface IVendaService {
    Venda efetuarVenda(Venda venda);
    List<Venda> listarVendasByVendedor(String vendedorId);
}
