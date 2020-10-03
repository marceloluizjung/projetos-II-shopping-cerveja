package br.com.delis.ShoppingCerveja.Services.Interfaces;

import br.com.delis.ShoppingCerveja.Domain.Vendedor;

import java.util.List;

public interface IVendedorService {
    List<Vendedor> listarVendedores();
    Vendedor cadastrarVendedor(Vendedor vendedor);
}
