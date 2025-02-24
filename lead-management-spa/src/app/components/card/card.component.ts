import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { Lead } from '../../models/lead.model';
import { CardService } from '../../service/lead.service';
import { Status } from '../enums/status.enum';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  constructor(private cardService: CardService) { }

  @Input() data: Lead[] = [];
  @Input() showExtraInfo: boolean = false;

  getInitials(firstName: string): string {
    return firstName ? firstName.charAt(0).toUpperCase() : '';
  }

  formatDate(leadDate: Date): string {
    const date = new Date(leadDate);

    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const month = months[date.getMonth()];
    const day = date.getDate();
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'pm' : 'am';

    hours = hours % 12 || 12;

    return `${month}, ${day} @ ${hours}:${minutes} ${ampm}`;
  }

  acceptLead(lead: Lead) {
    this.cardService.putStatusLead(lead.id, { ...lead, status: Status.Accepted }).subscribe(data => {
      if (data) {
        lead.status = Status.Accepted;
        this.data = this.data.filter(x=> x.status === Status.Invited);
      }
    });
  }

  declineLead(lead: Lead) {
    this.cardService.putStatusLead(lead.id, { ...lead, status: Status.Declined }).subscribe(data => {
      console.log(data)
      if (data) {
        lead.status = Status.Declined;
        this.data = this.data.filter(x=> x.status === Status.Declined);
      }
    });
  }

}
