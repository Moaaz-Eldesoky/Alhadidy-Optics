import { Component, ElementRef,OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  id:string="";
  productDetails:any=[];
  constructor(private _ActivatedRoute:ActivatedRoute,private _ProductsService:ProductsService, private elementRef: ElementRef){

  }

  // ready script from codepen site
  private setupEventListeners(): void {
    const attribOptions = this.elementRef.nativeElement.querySelectorAll('.attrib .option');
    attribOptions.forEach((option: HTMLElement) => {
      option.addEventListener('click', () => {
        attribOptions.forEach((sibling: HTMLElement) => {
          sibling.classList.remove('activ');
        });
        option.classList.add('activ');
      });
    });

    const zoomControl = this.elementRef.nativeElement.querySelector('.zoomControl');
    zoomControl.addEventListener('click', () => {
      const productCard = zoomControl.closest('.productCard');
      if (productCard) {
        productCard.classList.add('morph');
        document.body.classList.add('noScroll');
      }
    });

    const closePreview = this.elementRef.nativeElement.querySelector('.closePreview');
    closePreview.addEventListener('click', () => {
      const productCard = closePreview.closest('.productCard');
      if (productCard) {
        productCard.classList.remove('morph');
        document.body.classList.remove('noScroll');
      }
    });

    const movControls = this.elementRef.nativeElement.querySelectorAll('.movControl');
    movControls.forEach((control: HTMLElement) => {
      control.addEventListener('click', () => {
        const preview = control.closest('.preview');
        const imgActiv = preview ? preview.querySelector('.imgs img.activ') : null;
        if (preview && imgActiv) {
          const imgElements = Array.from(preview.querySelectorAll('.imgs img'));
          const currentIndex = imgElements.indexOf(imgActiv);
          if (control.classList.contains('left')) {
            const previousIndex = currentIndex === 0 ? imgElements.length - 1 : currentIndex - 1;
            imgElements[previousIndex].classList.add('activ');
          } else {
            const nextIndex = currentIndex === imgElements.length - 1 ? 0 : currentIndex + 1;
            imgElements[nextIndex].classList.add('activ');
          }
          imgActiv.classList.remove('activ');
        }
      });
    });
  }

  ngOnInit(){
    this.id=this._ActivatedRoute.snapshot.params['id'];
    this._ProductsService.getProductDetails(this.id).subscribe(
      (res)=>{
        console.log(res)
        this.productDetails = res;
      },
      (err)=>{
        console.log(err)
      }
    )
    this.setupEventListeners();
  }
}
