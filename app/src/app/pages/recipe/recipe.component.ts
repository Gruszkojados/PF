import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  @Input() recId: number;

  recName: string = "";
  recDesc: string = "";
  dateAdded: Date;
  dateUpdated: Date;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  public goToRecipe(id: number) {
    console.log("Go to recipe: " + id);
    this.router.navigate(['/fullRecipe']);
    
  }
}
