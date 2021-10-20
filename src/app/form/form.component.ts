import { Component, OnInit } from '@angular/core';
import { FormService } from '../services/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [FormService],
})
export class FormComponent implements OnInit {
  isSpecialisation: string[] = [];
  isEnglishlevel: string[] = [];
  checkboxClick = false;
  zzz = '';
  intern = {
    firstName: '',
    lastName: '',
    email: '',
    skype: '',
    phone: '',
    location: '',
  };

  constructor(private formService: FormService) {}

  ngOnInit(): void {
    this.isSpecialisation = this.formService.isSpecialisation;
    this.isEnglishlevel = this.formService.isEnglishlevel;
  }

  clickSubmit(event: Event, internForm: any): void {
    event.preventDefault();

    if (this.checkboxClick) {
      this.formService.saveDataIntern(this.intern);
      internForm.reset();
    } else {
      console.log(`Checkbox checked: ${this.checkboxClick}`);
    }
  }
}
