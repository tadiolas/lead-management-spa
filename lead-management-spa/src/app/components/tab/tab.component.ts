import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CardService } from '../../service/lead.service';
import { Status } from '../enums/status.enum';
import { Lead } from '../../models/lead.model';

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.css'
})
export class TabComponent implements OnInit {
  constructor(private cardService: CardService) { }

  @Input() activeTab: Status = Status.Invited;

  statusInvited = Status.Invited;
  statusAccepted = Status.Accepted;
  leads: Lead[] = [];
  loading: boolean = true;

  ngOnInit() {
    this.setActiveTab(this.activeTab);
  }

  setActiveTab(status: Status) {
    this.loading = true;
    
    this.cardService.getLeadsByStatus(status).subscribe(data => {
      this.leads = data;
      this.loading = false;
    });

    this.activeTab = status;
  }
}
