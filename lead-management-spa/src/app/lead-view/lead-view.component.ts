import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TabComponent } from '../components/tab/tab.component';

@Component({
  selector: 'app-lead-view',
  standalone: true,
  imports: [CommonModule, TabComponent],
  templateUrl: './lead-view.component.html',
  styleUrl: './lead-view.component.css'
})
export class LeadViewComponent {
  activeTab: string = 'Invited'; 
}
