import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SidebarComponent } from "../../Components/sidebar/sidebar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ButtonModule,
    SidebarComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
