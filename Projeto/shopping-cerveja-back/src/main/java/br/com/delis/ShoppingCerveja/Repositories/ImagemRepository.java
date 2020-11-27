package br.com.delis.ShoppingCerveja.Repositories;

import br.com.delis.ShoppingCerveja.Domain.Imagem;
import br.com.delis.ShoppingCerveja.Domain.Produto;
import br.com.delis.ShoppingCerveja.Domain.Vendedor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ImagemRepository extends CrudRepository<Imagem, Integer>{

    List<Imagem> findAllByOwnerId(Integer ownerId);
}
