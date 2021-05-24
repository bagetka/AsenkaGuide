import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CityListItem } from '../Interfaces/CityListItem';

@Component({
  selector: 'app-start-menu',
  templateUrl: './start-menu.component.html',
  styleUrls: ['./start-menu.component.scss']
})
export class StartMenuComponent {
  public readonly cities: CityListItem[] = [
    {
      id: 'florence',
      name: 'Флоренция',
      bookmarked: false
    },
    {
      id: 'pisa',
      name: 'Пиза',
      bookmarked: true
    }
  ];
  public test = true;

  public constructor(private readonly router: Router) {}

  public onCitySelect(selectedCityItem: Readonly<CityListItem>) {
    if (this.cities.filter(cityItem => cityItem.name === selectedCityItem.name).length) {
      this.router.navigate([`/guides/${selectedCityItem.id}`])
        .then(
          () => {
            console.log('Successfully navigated');
          }
        )
        .catch(error => {
            console.error(error);
          }
        );
    } else {
      console.error(selectedCityItem);
    }
  }

  public changeIconState(event: Readonly<MouseEvent>, city: CityListItem) {
    city.bookmarked = !city.bookmarked;
    event.stopPropagation();
  }
}
