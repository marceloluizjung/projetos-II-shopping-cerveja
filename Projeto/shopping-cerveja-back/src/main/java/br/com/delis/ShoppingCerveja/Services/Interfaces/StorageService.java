package br.com.delis.ShoppingCerveja.Services.Interfaces;

import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Path;
import java.util.List;
import java.util.stream.Stream;

public interface StorageService {

	void init();

	void store(MultipartFile file, Integer ownerId);

	List<String> loadAll(Integer ownerId);

	Path load(String filename);

	Resource loadAsResource(String filename);

	void deleteAll();

}
