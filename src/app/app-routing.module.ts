import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlterProductComponent } from './alter-product/alter-product.component';
import { LandPageComponent } from './land-page/land-page.component';
import { NewListComponent } from './new-list/new-list.component';
import { NotauthorizedComponent } from './notauthorized/notauthorized.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RegisterProductComponent } from './register-product/register-product.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { UserComponent } from './user/user.component';
import { AuthenticationGuard } from './util/authentication.guard';

const routes: Routes = [
  { path: '', component: LandPageComponent },
  {
    path: 'a/usuarios',
    component: UserComponent,
    canActivate: [AuthenticationGuard],
  },
  { path: 'cadastrar', component: RegisterProductComponent },
  { path: 'lista', component: ShoppingListComponent },
  { path: 'lista/detalhes/:id/', component: ProductDetailComponent },
  { path: 'nova-lista', component: NewListComponent },
  { path: 'nao-autorizado', component: NotauthorizedComponent },
  { path: 'alterar/:id', component: AlterProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthenticationGuard],
})
export class AppRoutingModule { }
