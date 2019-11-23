import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ItemSelectedComponent } from './item-selected/item-selected.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'home/:newsearch', component: HomeComponent },
    { path: 'item-selected/:imdb', component: ItemSelectedComponent },
    { path: '**', pathMatch: 'full', component: NotFoundComponent }
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
