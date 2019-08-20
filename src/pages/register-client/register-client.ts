import { Component, OnInit } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ClientProvider } from "../../providers/index";
import { CustomValidators } from "../../utils/validators";
import { Client } from "../../models/client.model";
import { Constants } from "../../utils/constants";
import { UniqueIdentificationValidadorDirective } from "../../directives/index";
import { ToastController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-register-client',
  templateUrl: 'register-client.html',
  providers: [ClientProvider, UniqueIdentificationValidadorDirective]
})
export class RegisterClientPage implements OnInit {

  public registerForm: FormGroup;
  public customValidators: CustomValidators;
  public client: Client;
  public clients: Array<Client> = [];

  constructor(
    public formBuilder: FormBuilder,
    public clientProvider: ClientProvider,
    public toastCtrl: ToastController,
    public uniqueIdentificationValidadorDirective: UniqueIdentificationValidadorDirective
  ) {
    this.customValidators = new CustomValidators();
    this.client = new Client(null, null, null, null);
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      identification: new FormControl('', [Validators.required, Validators.pattern(/^\d+$/)], this.uniqueIdentificationValidadorDirective.validate()),
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      birthdate: new FormControl('', [Validators.required, this.customValidators.isAdult()])
    });
  }

  /**
   * Método para registrar un cliente
   */
  onRegister() {
    if (this.registerForm.invalid) {
      return;
    }
    this.clientProvider
      .saveClient(this.client)
      .subscribe(res => {
        this.showSuccesToast();
        this.registerForm.reset();
      }, err => {
        this.showErrorToast();
      });
  }

  /**
   * Muestra mensajes exitosos
   */
  showSuccesToast() {
    const toast = this.toastCtrl.create({
      message: Constants.REGISTER_SUCCESS,
      duration: 4000
    });
    toast.present();
  }

  /**
   * Muestra mensaje de error
   */
  showErrorToast() {
    const toast = this.toastCtrl.create({
      message: Constants.REGISTER_ERROR,
      duration: 4000
    });
    toast.present();
  }

}
