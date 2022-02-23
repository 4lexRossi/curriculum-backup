export interface Language {
  value: number;
  viewValue: string;
}

export interface Gender {
  value: number;
  viewValue: string;
}

export interface Address {
  zipCode: string;
  streetAvenue: string;
  city: string;
  state: string;
}

export interface SocialNetWorks {
  socialUrl: string[];
  portfolioUrl: string;
}

export interface PersonalDetailForm {
  fullName: string;
  gender: Gender[];
  email: string;
  phone: string;
  address: Address;
  civilState: string;
  citizenship: string;
  socialNetWorks: SocialNetWorks;  
}