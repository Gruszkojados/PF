import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-full-recipe',
  templateUrl: './full-recipe.component.html',
  styleUrls: ['./full-recipe.component.scss']
})
export class FullRecipeComponent implements OnInit {

  itemValue = ''
  items: Observable<any[]>;

  constructor(public db: AngularFireDatabase) {
    this.items = db.list('items').valueChanges();
  }
  

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("Submit");
    this.db.list('items').push({ content: this.itemValue});
    this.itemValue = '';
  }

}
