import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StartMenuComponent } from './start-menu/start-menu.component';

import { NavigationComponent } from './navigation/navigation.component';

import { RouterGuideData } from './Interfaces/RouterGuideData';

import { GuidesComponent } from './Cities/guides.component';

// Cities
import { FlorenceComponent } from './Cities/Florence/History/florence.component';
import { FlorenceFactsComponent } from './Cities/Florence/Facts/florence-facts.component';
import { FlorenceFoodComponent } from './Cities/Florence/Food/florence-food.component';
import { FlorenceEntertainmentComponent } from './Cities/Florence/Entertainment/florence-entertainment.component';
import { PisaHistoryComponent } from './Cities/Pisa/History/pisa-history.component';
import { PisaFactsComponent } from './Cities/Pisa/Facts/pisa-facts.component';
import { PisaFoodComponent } from './Cities/Pisa/Food/pisa-food.component';
import { PisaEntertainmentComponent } from './Cities/Pisa/Entertainment/pisa-entertainment.component';

const routes: Routes = [
  {
    path: '',
    component: StartMenuComponent
  },
  {
    path: 'guides',
    component: NavigationComponent,
    children: [
      {
        path: 'florence',
        component: NavigationComponent,
        children: [
          {
            path: '',
            component: GuidesComponent,
            data: {
              url: 'florence',
              city: 'Флоренция'
            } as RouterGuideData
          },
          {
            path: 'history',
            component: FlorenceComponent
          },
          {
            path: 'facts',
            component: FlorenceFactsComponent
          },
          {
            path: 'entertainment',
            component: FlorenceEntertainmentComponent
          },
          {
            path: 'food',
            component: FlorenceFoodComponent
          }
        ]
      },
      {
        path: 'pisa',
        component: NavigationComponent,
        children: [
          {
            path: '',
            component: GuidesComponent,
            data: {
              url: 'pisa',
              city: 'Пиза'
            } as RouterGuideData
          },
          {
            path: 'history',
            component: PisaHistoryComponent
          },
          {
            path: 'facts',
            component: PisaFactsComponent
          },
          {
            path: 'entertainment',
            component: PisaEntertainmentComponent
          },
          {
            path: 'food',
            component: PisaFoodComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
