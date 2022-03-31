import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MyWishlistComponent } from './my-wishlist/my-wishlist.component';
import { CategoriesComponent } from './categories/categories.component';
import { MyPolesComponent } from './my-poles/my-poles.component';
import { SigninComponent } from './signin/signin.component';
import { NowplayingComponent } from './nowplaying/nowplaying.component';
import { SignupComponent } from './signup/signup.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MyreviewsComponent } from './myreviews/myreviews.component';
import { CatalogComponent } from './catalog/catalog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyWishlistComponent,
    CategoriesComponent,
    MyPolesComponent,
    SigninComponent,
    NowplayingComponent,
    SignupComponent,
    AboutUsComponent,
    MyreviewsComponent,
    CatalogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
