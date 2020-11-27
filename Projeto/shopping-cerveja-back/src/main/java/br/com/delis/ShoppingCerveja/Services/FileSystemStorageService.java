package br.com.delis.ShoppingCerveja.Services;

import br.com.delis.ShoppingCerveja.Domain.Imagem;
import br.com.delis.ShoppingCerveja.Exception.StorageException;
import br.com.delis.ShoppingCerveja.Exception.StorageFileNotFoundException;
import br.com.delis.ShoppingCerveja.Repositories.ImagemRepository;
import br.com.delis.ShoppingCerveja.Services.Interfaces.StorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.util.FileSystemUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;

@Service
public class FileSystemStorageService implements StorageService {

    private Path rootLocation;

    @Autowired
    private ImagemServiceImpl imagemServiceImpl;

    @Autowired
    private ImagemRepository imagemRepository;

    @Override
    public void store(MultipartFile file, Integer ownerId) {
        try {
            if (file.isEmpty()) {
                throw new StorageException("Failed to store empty file.");
            }
            Imagem imagePath = imagemServiceImpl.getImagePath(file.getOriginalFilename(), ownerId);

            File directory = new File(Paths.get("upload-dir/" + imagePath.getId()).toString());
            directory.mkdir();

            this.rootLocation = Paths.get("upload-dir/" + imagePath.getId());
            Path destinationFile = this.rootLocation.resolve(
                    Paths.get(file.getOriginalFilename()))
                    .normalize().toAbsolutePath();
            if (!destinationFile.getParent().equals(this.rootLocation.toAbsolutePath())) {
                // This is a security check
                throw new StorageException(
                        "Cannot store file outside current directory.");
            }
            try (InputStream inputStream = file.getInputStream()) {
                Files.copy(inputStream, destinationFile,
                        StandardCopyOption.REPLACE_EXISTING);
            }
        } catch (IOException e) {
            throw new StorageException("Failed to store file.", e);
        }
    }

    @Override
    public List<String> loadAll(Integer ownerId) {
        try {
            List<Imagem> imagePathList = imagemRepository.findAllByOwnerId(ownerId);
            List<String> paths = new ArrayList();
            imagePathList.forEach(imagemPath -> {
                paths.add("http:////localhost:8080//" + imagemPath.getId() + "//" + imagemPath.getNome());
            });
            return paths;
        } catch (Exception e) {
            throw new StorageException("Failed to read stored files", e);
        }
    }

    @Override
    public Path load(String filename) {
        return rootLocation.resolve(filename);
    }

    @Override
    public Resource loadAsResource(String filename) {
        try {
            Path file = load(filename);
            Resource resource = new UrlResource(file.toUri());
            if (resource.exists() || resource.isReadable()) {
                return resource;
            } else {
                throw new StorageFileNotFoundException(
                        "Could not read file: " + filename);

            }
        } catch (MalformedURLException e) {
            throw new StorageFileNotFoundException("Could not read file: " + filename, e);
        }
    }

    @Override
    public void deleteAll() {
        FileSystemUtils.deleteRecursively(rootLocation.toFile());
    }

    @Override
    public void init() {
        try {
            Files.createDirectories(rootLocation);
        } catch (IOException e) {
            throw new StorageException("Could not initialize storage", e);
        }
    }
}