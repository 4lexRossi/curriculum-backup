import { Component, OnInit } from '@angular/core';
import { Language, Gender, PersonalDetailForm, Address, SocialNetWorks } from 'src/app/shared/model/personal-detail.model';

@Component({
  selector: 'app-personal-form',
  templateUrl: './personal-form.component.html',
  styleUrls: ['./personal-form.component.scss']
})
export class PersonalFormComponent implements OnInit {

  selectedLanguageValue = 'english';
      
  constructor() { }

  ngOnInit(): void {
  }

  languages: Language[] = [
    {value: 0, viewValue: 'English'},
    {value: 1, viewValue: 'Portuguese'},
  ];

  genders: Gender[] = [
    {value: 0, viewValue: 'Male'},
    {value: 1, viewValue: 'Female'},
  ];

  address: Address = {
    zipCode: '',
    streetAvenue: '',
    city: '',
    state: ''
  }

  socialNetworks: SocialNetWorks = {
    socialUrl: [''],
    portfolioUrl: ''
  }

  personalDetailForm: PersonalDetailForm = {
    fullName: '',
    email: '',
    phone: '',
    address: this.address,
    gender: this.genders,
    civilState: '',
    citizenship: '',
    socialNetWorks: this.socialNetworks
  }

  getLanguage(language: number) {
    console.log(language)
    console.log(this.personalDetailForm)    
  }
}
