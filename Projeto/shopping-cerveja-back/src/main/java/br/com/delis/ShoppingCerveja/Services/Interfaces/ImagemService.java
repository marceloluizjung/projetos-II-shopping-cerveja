package br.com.delis.ShoppingCerveja.Services.Interfaces;

import br.com.delis.ShoppingCerveja.Domain.Imagem;

public interface ImagemService {

    Imagem getImagePath(String imageName, Integer ownerId);
}
