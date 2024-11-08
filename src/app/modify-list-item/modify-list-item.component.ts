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
      model: ['', Validators.required, Validators.maxLength(40)], // Keep length below 40 characters
      brand: ['', Validators.required, Validators.pattern("^[^#?!]*$")], // No special characters allowed
      price: ['', Validators.required, Validators.min(0)], // Must be greater then 0
      inStock: [true],
      description: ['']
    });
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.guitarService.getGuitarById(id).subscribe( {
        next: guitar => {
          if (guitar) {
            this.guitarForm.patchValue(guitar);
          }
        }
      })
    }
  }

  onSubmit(): void {
    if (this.guitarForm.valid) {
      const guitar: Guitar = this.guitarForm.value;
      if (guitar.id) {
        this.guitarService.updateGuitar(guitar).subscribe(() => this.router.navigate(['/guitars']));
      } else {
        // @ts-ignore
        guitar.id = this.guitarService.generateNewId();
        this.guitarService.addGuitar(guitar).subscribe(() => this.router.navigate(['/guitars']));
      }
    }
  }

  onDelete(): void {
    const id = this.guitarForm.value.id;
    if (id) {
      this.guitarService.removeGuitar(id).subscribe(() => this.router.navigate(['/guitars']));
    }
  }

  navigateToGuitarList(): void {
    this.router.navigate(['/guitars']);
  }
}
