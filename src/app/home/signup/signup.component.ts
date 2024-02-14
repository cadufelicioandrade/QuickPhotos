import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';
import { UserNotTakenValidatorService } from 'src/app/home/signup/user-not-taken.validator.service';
import { SignUpService } from './signup.service';
import { NewUser } from './new-user';
import { PlataformDetectorService } from 'src/app/core/plataform-detector/plataform-detector.service';

@Component({
  templateUrl:'./signup.component.html'
})
export class SignUpComponent implements OnInit{

  signupForm:  FormGroup;
  @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder:FormBuilder,
    private untvService: UserNotTakenValidatorService,
    private signupService: SignUpService,
    private route:Router,
    private plataformDetectorService: PlataformDetectorService
    ){}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email:['',
        [
          Validators.required,
          Validators.email
        ]
      ],
      fullName:['',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(40)
        ]
      ],
      userName:['',
        [//sync
          Validators.required,
          lowerCaseValidator,
          Validators.minLength(2),
          Validators.maxLength(30)
        ],
        //async
        this.untvService.checkUserNameTaken()
      ],
      password:['',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(14)
        ]
      ]
    });
    // this.plataformDetectorService.isPlatformBrowser() &&
    // this.emailInput.nativeElement.focus();
  }

  signup(){
      const newUser = this.signupForm.getRawValue() as NewUser;
      this.signupService.signup(newUser)
      .subscribe(()=> this.route.navigate(['']),
      error => console.log(error));
  }
}
