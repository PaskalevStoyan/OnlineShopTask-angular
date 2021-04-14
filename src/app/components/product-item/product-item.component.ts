import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../modules/Product';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  closeResult: string;
  
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
   
  }

  editProductDate(product) {
    let date = new Date(product.DeliveryOn.slice(9, product.DeliveryOn.length - 1));
    let result = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`; 

    return result;
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
