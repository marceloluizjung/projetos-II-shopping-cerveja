package br.com.delis.ShoppingCerveja.Controllers;

import br.com.delis.ShoppingCerveja.Domain.Produto;
import br.com.delis.ShoppingCerveja.Exception.StorageFileNotFoundException;
import br.com.delis.ShoppingCerveja.Services.Interfaces.StorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.method.annotation.MvcUriComponentsBuilder;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.io.IOException;
import java.nio.file.Path;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping("/storage")
public class FileUploadController {

    @Autowired
    private StorageService storageService;

    @GetMapping("/filesByOwner/{ownerId}")
    public List<String> listUploadedFiles(@PathVariable Integer ownerId, Model model) throws IOException {
        return storageService.loadAll(ownerId);
    }

    @GetMapping("/files/{filename:.+}")
    @ResponseBody
    public Optional<String> serveFile(@PathVariable String filename) throws IOException {

        Resource file = storageService.loadAsResource(filename);
        file.getFile().getAbsolutePath();
        return Optional.of(file.getFile().getAbsolutePath());
    }

    @PostMapping("/upload")
    public Optional<String> handleFileUpload(@RequestParam("file") MultipartFile file, @RequestParam("ownerId") String ownerId,
                                   RedirectAttributes redirectAttributes) {
        storageService.store(file, Integer.parseInt(ownerId));
        redirectAttributes.addFlashAttribute("message",
                "You successfully uploaded " + file.getOriginalFilename() + "!");
        return Optional.of(file.getOriginalFilename());
    }

    @ExceptionHandler(StorageFileNotFoundException.class)
    public ResponseEntity<?> handleStorageFileNotFound(StorageFileNotFoundException exc) {
        return ResponseEntity.notFound().build();
    }
}
