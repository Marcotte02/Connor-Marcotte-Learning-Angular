import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {GuitarService} from "../guitar.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Guitar} from "../models/guitar";

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './modify-list-item.component.html',
  styleUrl: './modify-list-item.component.css'
})
export class ModifyListItemComponent {
  guitarForm: FormGroup;
  guitarId?: number;

  constructor(
    private fb: FormBuilder,
    private guitarService: GuitarService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.guitarForm =this.fb.group({
      model: ['', Validators.required],
      brand: ['', Validators.required],
      price: ['', Validators.required],
      inStock: [false],
      description: ['']
    });
  }

  ngOnInit(): void {
    this.guitarId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.guitarId) {
      this.guitarService.getGuitarById(this.guitarId).subscribe(guitar => {
        if (guitar) {
          this.guitarForm.patchValue(guitar);
        }
      });
    }
  }

  onSubmit(): void {
    const guitar: Guitar = this.guitarForm.value;

    if (guitar.id) {
      this.guitarService.updateGuitar(guitar);
    } else {
      const newId = this.guitarService.generateNewId();
      guitar.id = newId;
      this.guitarService.addGuitar(guitar);
    }
    this.router.navigate(['/guitars']);
  }

  onDelete(): void {
    const id = this.guitarForm.get('id')?.value;
    if (id) {
      this.guitarService.removeGuitar(id);
      this.router.navigate(['/guitars']);
    }
  }

  navigateToGuitarList(): void {
    this.router.navigate(['/guitars']);
  }
}
