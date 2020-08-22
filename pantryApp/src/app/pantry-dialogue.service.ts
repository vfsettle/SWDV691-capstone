import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { PantryDataService } from './pantry-data.service';


@Injectable({
  providedIn: 'root'
})
export class PantryDialogueService {

  constructor(public alertController: AlertController, public dataSvc: PantryDataService) {
    console.log('Utilizing PantryDialogue Service');
  }

  async warningPrompt(item?, index?) {
    const alert = await this.alertController.create({
      // cssClass: 'my-custom-class',
      header: item? 'Delete Item' : 'Cancel Action',
      // subHeader: 'Subtitle',
      message: item? 'Confirm Delete' : 'Exit',
      inputs: [
        {
          name: 'name',
          placeholder: 'Item',
          value: item? item.name : null
        },
        {
          name: 'qty',
          placeholder: 'Quantity',
          value: item? item.qty : null
        },
        {
          name: 'expiry',
          placeholder: 'Expiry Date',
          value: item? item.expiry : null
        },
        {
          name: 'location',
          placeholder: 'Storage Location',
          value: item? item.location : null
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          // role: 'cancel',
          // cssClass: 'secondary',
          handler: (item) => {
            console.log('Cancel item delete');
            this.dataSvc.editItem(item, index);
          }
        }, 
        {
          text: 'Delete',
          handler: (item) => {
            console.log('Delete', item);
            if (index!== undefined) {
            this.dataSvc.removeItem(item);
          }
          else {
            this.dataSvc.editItem(item, index);
          }

          }
        }
      ]
    });

    await alert.present();
  }

  async showPrompt(item?, index?) {
    const alert = await this.alertController.create({
      // cssClass: 'my-custom-class',
      header: item? 'Edit Item' : 'Add Item',
      // subHeader: 'Subtitle',
      message: item? 'Please edit item' : 'Please add item',
      inputs: [
        {
          name: 'name',
          placeholder: 'Item',
          value: item? item.name : null
        },
        {
          name: 'qty',
          placeholder: 'Quantity',
          value: item? item.qty : null
        },
        {
          name: 'expiry',
          placeholder: 'Expiry Date',
          value: item? item.expiry : null
        },
        {
          name: 'location',
          placeholder: 'Storage Location',
          value: item? item.location : null
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          // role: 'cancel',
          // cssClass: 'secondary',
          handler: data => {
            console.log('Cancel clicked');
          }
        }, 
        
        {
          text: 'Save',
          handler: data => {
            console.log('Save Handler', data);
            if (index!== undefined) {
              item.name = data.name;
              item.qty = data.qty;
              item.expiry = data.expiry;
              item.location = data.location;
              this.dataSvc.editItem(item, index);
            }
            else {
            this.dataSvc.addItem(data);
            }
          }
        }
      ]
    });

    await alert.present();
  }

}
