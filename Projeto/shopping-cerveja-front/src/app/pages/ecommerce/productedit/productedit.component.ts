import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { finalize } from "rxjs/operators";
import { ProdutoService } from "src/app/core/services/produto.service";
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

  constructor(
    private productService: ProdutoService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.productForm = this.createForm();
    // tslint:disable-next-line: max-line-length
    this.breadCrumbItems = [
      { label: "UBold", path: "/" },
      { label: "eCommerce", path: "/" },
      { label: "Product Edit", path: "/", active: true },
    ];
    if (this.activatedRoute.snapshot.params["id"]) {
      this.productService
        .getProductById(this.activatedRoute.snapshot.params["id"])
        .subscribe((response) => {
          this.productData = response;
          this.productForm.patchValue({
            description: this.productData.descricao,
            price: this.productData.valor,
          });
        });
    }
  }

  private createForm() {
    return this.formBuilder.group({
      description: ["", Validators.required],
      price: ["", Validators.required],
    });
  }

  private submitForm() {
    this.loader = true;
    let product: Produto = {
      id: this.activatedRoute.snapshot.params["id"],
      descricao: "",
      quantidade: 1,
      valor: 1,
      vendedor: {
        id: 1,
        email: "teste@teste.com",
        nome: "Tenant 1",
        nota: 1,
        senha: "123",
        imagem: "",
      },
      imagem: "",
    };
    this.productService.createProduct(product).subscribe((response) => {
      this.showMessageSuccess().then(() => {
        this.loader = false;
        this.router.navigate(["/ecommerce/products"]);
      });
    });
  }

  public showMessageSuccess() {
    return Swal.fire({
      title: "Good job!",
      text: "You clicked the button!",
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
