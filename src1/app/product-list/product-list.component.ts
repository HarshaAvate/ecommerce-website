import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  //  Myname: any = ['Harsha', 'Krishna', 'Shubham','Pramod', 'Ajay','Aarohi',123];
   
  // addToCart: number = 0;
  // name = 'harsha';
  // nume = 123456789;
  // product={
  //   name:'iPhone X',
  //   price: 789.215,
  //   color: 'Black',
  //   discount: 8.5,
  //   inStock: 10,
  //   pImage: 'https://www.freeiconspng.com/uploads/new-iphone-x-photo-18.png',
  // };
  // getDiscountPrice(){
  //   return (
  //     this.product.price-(this.product.price*this.product.discount)/100
  //   );
  // }

  // decrementCartVale(){
  //   if(this.addToCart > 0){ 
  //   this.addToCart--;
  //   }
  // }
  // incrementCartVale(){
  //   if(this.addToCart < this.product.inStock){
  //   this.addToCart++;
  //   }
  // }

  // onNameChange(event:any){
  //   (this.Myname=event.target.value)
  // }


  listOfProducts: any = [
    {
      id: '0',
      name: "iPhone 10",
      brand:'Apple',
      color: 'White',
      price: 999.123,
      discountPrice:75,
      imageUrl:"https://www.freeiconspng.com/uploads/iphone-x-factory--8.png",
       
      is_in_inventory: true,
    },
    {
      id: '1',
      name: "iPhone 10",
      brand:'Apple',
      color: 'Gray',
      price: 111.560,
      discountPrice:80,
      imageUrl:"https://www.freeiconspng.com/uploads/iphone-x-new-model-13.png",
      is_in_inventory: true,
    },

    {
      id: '2',
      name: "iPhone 13 Pro",
      brand:'Apple',
      category: 'Smart Phone',
      color: 'pink',
      price: 82900.00,
      discountPrice:40,
      imageUrl:
        'https://media.karousell.com/media/photos/products/2021/9/23/iphone_13_pink_128gb_brand_new_1632439725_302ab247_progressive.jpg',
      is_in_inventory: true,
    },

    {
      id: '3',
      name: 'iPhone 13 Pro',
      brand:'Apple',
      category: 'SmartPhone',
      color: 'Nevy Blue',
      price: 61999.00,
      discountPrice:60,
      imageUrl:"https://pngsource.in/assets/thumbnails/iPhone-13-Pro-Transparent-HD-Image-PNG-isolated-Pngsource-NLTIC58V.png",
        
      is_in_inventory: false,
    },
    {
      id: '4',
      name: "Apple iPhone 14 Max Pro",
      brand: 'Apple',
      category: 'SmartPhone',
      color: 'Purple',
      price: 4299.00,
      discountPrice:20,
      imageUrl:'https://imagedelivery.net/5MYSbk45M80qAwecrlKzdQ/f4ec8475-df61-4a9c-fd3f-095b2ab89f00/preview',
      is_in_inventory: true,
    },
    {
      id: '5',
      name:" Apple iPhone 11 ",
      brand: 'Apple',
      category: 'SmartPhone',
      color: 'Yellow',
      price:36999.00 ,
      discountPrice:65,
      imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFaSkganRmc5rmOg9QE-pWR8jsuAm0ani7dLBLRVDoQBKPrC0INg3Qw_zBOsxIj--BUoA&usqp=CAU',
      is_in_inventory: true,
    },
    {
      id: '6',
      name: "Apple Iphone 11",
      brand: 'Apple',
      category: 'SmartPhone',
      color: 'Red',
      price: 25999.00,
      discountPrice:75,
      imageUrl:
        'https://i.ebayimg.com/images/g/IcAAAOSw7H1hQe56/s-l1200.jpg',
      is_in_inventory: true,
    },
    {
      id: '7',
      name: "Apple iPhone 14 Pro",
      brand: 'Apple',
      category: 'SmartPhone',
      color: 'Starlight',
      price: 56999.00,
      discountPrice:60,
      imageUrl:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-storage-select-202209-6-1inch-starlight?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1660751188805',
      is_in_inventory: true,
    },
    {
      id: '8',
      name: "Apple iPhone 12 Pro",
      brand: 'Apple',
      category: 'SmartPhone',
      color: 'Light Pink',
      price: 26551,
      discountPrice:50,

      imageUrl:
        'https://themayanagari.com/wp-content/uploads/2021/04/3-768x1143.jpg.webp',
      is_in_inventory: true,
    },
    {
      id: '9',
      name: 'Apple iPhone 15 Pro max',
      brand: 'Apple',
      category: 'SmartPhone',
      color: 'white',
      price:179900.00 ,
      discountPrice:70,
      imageUrl:
        'https://static.toiimg.com/thumb/resizemode-4,msid-103617394,width-250,imgv-2/103617394.jpg',
      is_in_inventory: true,
    },
    {
      id: '10',
      name: "iPhone 15 Pro",
      brand: 'Apple',
      category: 'SmartPhone',
      color: 'Blue',
      price: 134900.00,
      discountPrice:40,
      imageUrl:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-bluetitanium?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692845699311',
      is_in_inventory: true,
    },
  ];
  prod: any;


}