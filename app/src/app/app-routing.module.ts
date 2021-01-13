import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullRecipeComponent } from './pages/full-recipe/full-recipe.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  { path: '',  component: MainComponent, pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'fullRecipe', component: FullRecipeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
