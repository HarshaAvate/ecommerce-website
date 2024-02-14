import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  country: string[] = ['IN', 'US', 'UK', 'AS', 'PAK', 'AF', 'AG'];
  navBarelements:any=[

    {
      name: 'offers',
      path: '/offers',
    },

    {
      name: 'Products',
      path:'/Products',
    },
    
    {
      name: 'Catelog',
      path: '/Catelog',
    },

    {
      name:'Services',
      path:'/Services',
    },

    {
      name:'About',
      path: '/About',
    }
  ]
  
  
  

}
