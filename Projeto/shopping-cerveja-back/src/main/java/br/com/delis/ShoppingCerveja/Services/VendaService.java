package br.com.delis.ShoppingCerveja.Services;

import br.com.delis.ShoppingCerveja.Domain.Venda;
import br.com.delis.ShoppingCerveja.Domain.Vendedor;
import br.com.delis.ShoppingCerveja.Repositories.VendaRepository;
import br.com.delis.ShoppingCerveja.Repositories.VendedorRepository;
import br.com.delis.ShoppingCerveja.Services.Interfaces.IVendaService;
import br.com.delis.ShoppingCerveja.Services.Interfaces.IVendedorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VendaService implements IVendaService {

    @Autowired
    private VendaRepository vendaRepository;

    @Override
    public Venda efetuarVenda(Venda venda) {
        return vendaRepository.save(venda);
    }

    @Override
    public List<Venda> listarVendasByVendedor(String vendedorId) {
        return vendaRepository.findAllByVendedorOrderByDataCriacaoAsc(vendedorId);
    }
}
