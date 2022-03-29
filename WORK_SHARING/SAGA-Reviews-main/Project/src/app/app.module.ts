import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CarouselModule } from 'primeng/carousel';
import { MyWishlistComponent } from './my-wishlist/my-wishlist.component';
import { CategoriesComponent } from './categories/categories.component';
import { MyPolesComponent } from './my-poles/my-poles.component';
import { SigninComponent } from './signin/signin.component';
import { NowplayingComponent } from './nowplaying/nowplaying.component';
import { SignupComponent } from './signup/signup.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MyreviewsComponent } from './myreviews/myreviews.component';
import { CatalogComponent } from './catalog/catalog.component';
import {SkeletonModule} from "./shared/skeleton/skeleton.module";
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        CarouselModule,
        SkeletonModule,
        MatProgressBarModule,
        BrowserAnimationsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
