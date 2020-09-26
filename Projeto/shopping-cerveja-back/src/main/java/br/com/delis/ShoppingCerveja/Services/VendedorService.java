package br.com.delis.ShoppingCerveja.Services;

import br.com.delis.ShoppingCerveja.Domain.Vendedor;
import org.springframework.stereotype.Service;

@Service
public class VendedorService implements IVendedorService {
    @Override
    public Vendedor[] listarVendedores() {
        Vendedor[] vendedores = new Vendedor[2];

        vendedores[0] = new Vendedor();
        vendedores[1] = new Vendedor();

        return vendedores;
    }
}
