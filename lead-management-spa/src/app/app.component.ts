import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LeadViewComponent } from './lead-view/lead-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LeadViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lead-management-spa';

}
