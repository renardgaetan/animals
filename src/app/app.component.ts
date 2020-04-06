import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
 title = 'my-app';

 SelectionEnCours = false;
 ItemSelectionner: any = {}

 ItemArray = [
	  {
	  		nom: "chat",
	  		taille: "30cm",
	  		poids: "2 kg",
	  		img: 'assets/chat.jpg'
	  }
	  ,
	  {
	  		nom: "chien",
	  		taille: "120cm",
	  		poids: "32 kg",
	  		img: 'assets/chien.jpg'
	  }
  ]

  selection(item){
  	this.SelectionEnCours = true;
  	this.ItemSelectionner.nom = item.nom; 
  	this.ItemSelectionner.taille = item.taille; 
  	this.ItemSelectionner.poids = item.poids; 
  	this.ItemSelectionner.nom = item.nom; 
  }

}
