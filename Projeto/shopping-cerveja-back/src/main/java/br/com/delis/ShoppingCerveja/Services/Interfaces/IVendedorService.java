package br.com.delis.ShoppingCerveja.Services.Interfaces;

import br.com.delis.ShoppingCerveja.Domain.Vendedor;

import java.util.List;
import java.util.Optional;

public interface IVendedorService {
    List<Vendedor> listarVendedores();
    Optional<Vendedor> detalharVendedor(int id);
    Vendedor salvarVendedor(Vendedor vendedor);
}
