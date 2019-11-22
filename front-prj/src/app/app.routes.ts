import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: '**', pathMatch: 'full', component: NotFoundComponent }
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
