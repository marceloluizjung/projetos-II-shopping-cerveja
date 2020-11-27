package br.com.delis.ShoppingCerveja.Services;

import br.com.delis.ShoppingCerveja.Domain.Imagem;
import br.com.delis.ShoppingCerveja.Repositories.ImagemRepository;
import br.com.delis.ShoppingCerveja.Services.Interfaces.ImagemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImagemServiceImpl implements ImagemService {

    @Autowired
    private ImagemRepository imagemRepository;

    public Imagem getImagePath(String imageName, Integer ownerId) {
        Imagem imagem = new Imagem();
        imagem.setNome(imageName);
        imagem.setProduct(true);
        imagem.setOwnerId(ownerId);
        return imagemRepository.save(imagem);
    }

}
