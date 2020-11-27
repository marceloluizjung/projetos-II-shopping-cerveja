import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { FileUploadComponent } from "@iplab/ngx-file-upload";
import { ProdutoService } from "src/app/core/services/produto.service";
import { StoService } from "src/app/core/services/sto.service";
import Swal from "sweetalert2";
import { Produto } from "./../../../core/models/produto.models";

@Component({
  selector: "app-productedit",
  templateUrl: "./productedit.component.html",
  styleUrls: ["./productedit.component.scss"],
})

/**
 * Product-edit component - handling the edit-product with sidebar and content
 */
export class ProducteditComponent implements OnInit {
  // bread crumb items
  private breadCrumbItems: Array<{}>;
  private productData: Produto;
  private productForm: FormGroup;
  private loader: boolean = false;
  @ViewChild("fileUpload", { static: false }) fileUpload: any;

  constructor(
    private productService: ProdutoService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private stoService: StoService
  ) {}

  ngOnInit() {
    this.productForm = this.createForm();
    // tslint:disable-next-line: max-line-length
    this.breadCrumbItems = [
      { label: "Dellis", path: "/" },
      { label: "eCommerce", path: "/" },
      { label: "Cadastro de produto", path: "/", active: true },
    ];
    if (this.activatedRoute.snapshot.params["id"]) {
      this.productService
        .getProductById(this.activatedRoute.snapshot.params["id"])
        .subscribe((response) => {
          this.productData = response;
          this.productForm.patchValue({
            name: this.productData.nome,
            reference: this.productData.marca,
            description: this.productData.descricao,
            price: this.productData.valor,
            quantity: this.productData.quantidade,
          });
        });
    }
  }

  private createForm() {
    return this.formBuilder.group({
      name: ["", Validators.required],
      reference: ["", Validators.required],
      description: ["", Validators.required],
      price: ["", Validators.required],
      quantity: ["", Validators.required],
    });
  }

  private submitForm() {
    this.uploadFiles();
    this.loader = true;
    let product: Produto = {
      id: this.activatedRoute.snapshot.params["id"],
      nome: this.productForm.value["name"],
      marca: this.productForm.value["reference"],
      descricao: this.productForm.value["description"],
      quantidade: this.productForm.value["quantity"],
      valor: this.productForm.value["price"],
      vendedor: {
        id: 1,
        email: "teste@teste.com",
        nome: "Tenant 1",
        nota: 1,
        senha: "123",
        imagem: "",
      },
    };
    this.productService.createProduct(product).subscribe((response) => {
      this.showMessageSuccess().then(() => {
        this.loader = false;
        this.router.navigate(["/ecommerce/products"]);
      });
    });
  }

  public uploadFiles() {
    this.fileUpload.control.files.forEach((filelement) => {
      let formData = new FormData();
      formData.append("file", filelement);
      formData.append("ownerId", "1");
      setTimeout(() => {
        this.stoService.uploadImages(formData).subscribe((response) => {});
      }, 1000);
    });
  }

  public showMessageSuccess() {
    return Swal.fire({
      title: "Sucesso!",
      text: "O produto foi salvo.",
      type: "success",
      confirmButtonClass: "btn btn-confirm mt-2",
    });
  }

  public showMessageAlert() {
    return Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      type: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      confirmButtonClass: "btn btn-success mt-2",
      cancelButtonClass: "btn btn-danger ml-2 mt-2",
      buttonsStyling: false,
    });
  }

  public onCancel() {
    this.showMessageAlert().then((status) => {
      if (status.value) this.router.navigate(["/ecommerce/products"]);
    });
  }

  public onDelete() {
    this.showMessageAlert().then((status) => {
      if (status.value) {
        this.productService
          .deleteProductById(this.activatedRoute.snapshot.params["id"])
          .subscribe((response) => {
            this.router.navigate(["/ecommerce/products"]);
          });
      }
    });
  }
}
