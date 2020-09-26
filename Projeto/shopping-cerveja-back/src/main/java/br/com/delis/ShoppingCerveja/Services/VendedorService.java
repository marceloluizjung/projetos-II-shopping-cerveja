package br.com.delis.ShoppingCerveja.Services;

import br.com.delis.ShoppingCerveja.Domain.Vendedor;
import br.com.delis.ShoppingCerveja.Repositories.VendedorRepository;
import br.com.delis.ShoppingCerveja.Services.Interfaces.IVendedorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VendedorService implements IVendedorService {

    @Autowired
    private VendedorRepository vendedorRepository;

    @Override
    public List<Vendedor> listarVendedores() {
        return (List<Vendedor>) vendedorRepository.findAll();
    }

    @Override
    public Vendedor cadastrarVendedor(Vendedor vendedor) {
        return vendedorRepository.save(vendedor);
    }
}
