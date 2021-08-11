import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsellComponent } from './productsell/productsell.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "products/sell",
    component: ProductsellComponent
  }];
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
