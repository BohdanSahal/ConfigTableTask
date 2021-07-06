import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-create-config',
  templateUrl: './create-config.component.html',
  styleUrls: ['./create-config.component.css']
})
export class CreateConfigComponent implements OnInit {
  form: FormGroup;
  bet2:FormGroup;
  Qualification:boolean = false;
  constructor(private formBuilder: FormBuilder, private dialogRef: MatDialogRef<CreateConfigComponent>) {
    this.form = new FormGroup({
      ConfigName: new FormControl('',Validators.required),
      SportsBook: new FormControl('',Validators.required),
      LineMax: new FormControl('',Validators.required),
      LineMin: new FormControl('',Validators.required),
      GameTime: new FormControl('',Validators.required),
      BetOnMovement: new FormControl('',Validators.required),
      Home: new FormControl('',Validators.required),
      Favourite: new FormControl('',Validators.required),
      PreGame: new FormControl('',Validators.required)
    });
    this.bet2 = new FormGroup({
      ConfigName: new FormControl('',Validators.required),
      Home: new FormControl('',Validators.required),
      PreGame: new FormControl('',Validators.required),
      SportsBook: new FormControl('',Validators.required),
      LineMax: new FormControl('',Validators.required),
      LineMin: new FormControl('',Validators.required),
      GameTime: new FormControl('',Validators.required),
      BetOfRecovery: new FormControl('',Validators.required),
      referenceLine:new FormControl('',Validators.required),
      range:new FormControl('',Validators.required),
      period:new FormControl('',Validators.required)
    });
  }


  ngOnInit(): void {

  }
  get f() { return this.form.controls; }
  onSend() {
    this.dialogRef.close(this.form.value);
  }

}
