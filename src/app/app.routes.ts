import type { Routes } from '@angular/router';
import { MainLayoutComponent } from './shared/layout/main-layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { PricingComponent } from './pricing/pricing.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'pricing', component: PricingComponent },
    ]
  }
];
