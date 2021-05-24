import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navigate-button',
  templateUrl: './navigate-button.component.html',
  styleUrls: ['./navigate-button.component.scss']
})
export class NavigateButtonComponent {
  @Input() destinationId: string = '';
  @Input() destination: string = '';

  public navigateByGoogleMaps() {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${this.destination}&destination_place_id=${this.destinationId}&travelmode=walking&`,
      '_blank'
    );
  }
}
