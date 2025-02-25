import { Component, OnInit } from '@angular/core';
import { Product } from '../interface/product.model';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductDetailComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Laptop',
      price: 1500,
      inStock: true,
      onSale: false,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkGMb0MAvK8P35tmFYeA56A-9R6Nd5cQNCfA&s',
    },
    {
      id: 2,
      name: 'Smartphone',
      price: 800,
      inStock: true,
      onSale: true,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYIrPyLy13ka3H9JEtLS4btarZmN8sYo14ug&s',
    },
    {
      id: 3,
      name: 'Tablet',
      price: 400,
      inStock: false,
      onSale: false,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS73QlFVJxBZcCyBUn2CQeRNiiOVzyU1maHyg&s',
    },
    {
      id: 4,
      name: 'Monitor',
      price: 200,
      inStock: true,
      onSale: true,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBK-__UgdAwGoJxijt0oUWjmtrqGSGR00V0w&s',
    },
    {
      id: 5,
      name: 'Teclado mecánico',
      price: 100,
      inStock: true,
      onSale: false,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkSpJeAh6ZPZ1gAjS25933h2yXcqBNuBW1Mg&s',
    },
    {
      id: 6,
      name: 'Mouse inalámbrico',
      price: 50,
      inStock: false,
      onSale: false,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIVt_vud9KTKilWtbC8xAi0_dAHO1PLnM_nw&s',
    },
    {
      id: 7,
      name: 'Impresora láser',
      price: 250,
      inStock: true,
      onSale: true,
      img: 'https://http2.mlstatic.com/D_NQ_NP_666230-MPE49256125662_032022-O.webp',
    },
    {
      id: 8,
      name: 'Auriculares Bluetooth',
      price: 120,
      inStock: true,
      onSale: false,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSYrtww_EuFUX8gId0rX4BESJhuw-oT1esxA&s',
    },
    {
      id: 9,
      name: 'Silla ergonómica',
      price: 300,
      inStock: false,
      onSale: true,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM6RxdyTaJK962xrGIfdGwTYNooM0Fx-Pb1Q&s',
    },
    {
      id: 10,
      name: 'Micrófono profesional',
      price: 180,
      inStock: true,
      onSale: false,
      img: 'https://m.media-amazon.com/images/I/81atqMlP6zL._AC_UF1000,1000_QL80_.jpg',
    },
    {
      id: 11,
      name: 'Disco SSD 1TB',
      price: 220,
      inStock: true,
      onSale: true,
      img: 'https://m.media-amazon.com/images/I/71QygIvKzfL.jpg',
    },
    {
      id: 12,
      name: 'Cámara web 1080p',
      price: 90,
      inStock: true,
      onSale: false,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGXKD19GJwq7uhRSKtCOUTQhej1bf1XhZX-Q&s',
    },
    {
      id: 13,
      name: 'Router Wi-Fi 6',
      price: 160,
      inStock: false,
      onSale: true,
      img: 'https://m.media-amazon.com/images/I/51Q99CZv-SL._AC_UF894,1000_QL80_.jpg',
    },
    {
      id: 14,
      name: 'Tarjeta gráfica RTX 4060',
      price: 500,
      inStock: true,
      onSale: false,
      img: 'https://m.media-amazon.com/images/I/71t1ClD2EtL.jpg',
    },
    {
      id: 15,
      name: 'Smartwatch',
      price: 250,
      inStock: true,
      onSale: true,
      img: 'https://elektra.vtexassets.com/arquivos/ids/4070090/853324.jpg?v=638593490130700000',
    },
  ];

  selectedProduct: Product | null = null;

  onSelectProduct(product: Product): void {
    this.selectedProduct = product;
  }

  isSelected(product: Product): boolean {
    return this.selectedProduct?.id === product.id;
  }
}
