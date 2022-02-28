import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {MyWishlistComponent} from "./my-wishlist/my-wishlist.component";
import {CategoriesComponent} from "./categories/categories.component"

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'my-watchlist', component: MyWishlistComponent},
  { path: 'categories', component: CategoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
