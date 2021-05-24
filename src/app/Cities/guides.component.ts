import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { RouterGuideData } from '../Interfaces/RouterGuideData';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-guides',
  templateUrl: './guides.component.html',
  styleUrls: ['./guides.component.scss']
})
export class GuidesComponent implements OnInit, OnDestroy {
  public city!: string;

  private url!: string;
  private subscription!: Subscription;

  public constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {
  }

  public ngOnInit(): void {
    this.subscription = this.route.data.subscribe((data) => {
        this.city = (data as RouterGuideData).city;
        this.url = (data as RouterGuideData).url;
      }
    );
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public navigateTo(section: Readonly<string>) {
    this.router.navigateByUrl(`guides/${this.url}/${section}`)
      .then(value => {
          console.log(value);
        }
      )
      .catch(error => {
          console.log(error);
        }
      );
  }
}
