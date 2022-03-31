import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {MyWishlistComponent} from "./my-wishlist/my-wishlist.component";
import {CategoriesComponent} from "./categories/categories.component";
import {MyreviewsComponent} from "./myreviews/myreviews.component";
import {SigninComponent} from "./signin/signin.component";
import {SignupComponent} from "./signup/signup.component";
import {NowplayingComponent} from "./nowplaying/nowplaying.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {CatalogComponent} from "./catalog/catalog.component";
import {MyPolesComponent} from "./my-poles/my-poles.component";


const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'my-watchlist', component: MyWishlistComponent},
  { path: 'categories', component: CategoriesComponent},
  {path: 'my-reviews', component:MyreviewsComponent},
  {path: 'my-poles', component: MyPolesComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'nowplaying', component: NowplayingComponent},
  {path: 'aboutus', component: AboutUsComponent},
  {path: 'catalog', component: CatalogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
