import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';
import { UserNotTakenValidatorService } from 'src/app/home/signup/user-not-taken.validator.service';

@Component({
  templateUrl:'./signup.component.html'
})
export class SignUpComponent implements OnInit{

  signupForm:  FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private untvService: UserNotTakenValidatorService
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
    })
  }

}
