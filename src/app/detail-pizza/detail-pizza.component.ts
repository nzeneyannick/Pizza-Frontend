import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PizzaService } from '../pizza.service';
import { Pizza } from '../pizza';
@Component({
  selector: 'app-detail-pizza',
  templateUrl: './detail-pizza.component.html',
  styleUrls: ['./detail-pizza.component.css']
})
export class DetailPizzaComponent implements OnInit {
  pizza: Pizza

  constructor( private route: ActivatedRoute,
    private pizzaService: PizzaService,
    private location: Location) { }

  ngOnInit() {
    this.getPizza()
  }
  getPizza(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pizzaService.getPizza(id)
      .subscribe(pizza => this.pizza = pizza);
  }
}
