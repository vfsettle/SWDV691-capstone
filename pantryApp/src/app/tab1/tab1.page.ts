import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { PantryDataService } from '../service/pantry-data.service';
import { PantryDialogueService } from '../service/pantry-dialogue.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  title = "What's In My Pantry?";

  constructor(public navCtrl: NavController, public toastController: ToastController, public alertController: AlertController, public dataSvc: PantryDataService, public inputSvc: PantryDialogueService, public socialShare: SocialSharing, public camera: Camera) {}

  loadItems() {
    return this.dataSvc.getItems();
  }
  
  addItem() {
    console.log("Adding Item");
    this.inputSvc.showPrompt();
  }

  async editItem(item, index) {
    console.log("Edit Item - ", item, index);
    const toast = await this.toastController.create({
      message: 'Edit Item - ' + " " + item.name,
      duration: 3000,
      // position: 'bottom',
    });
    toast.present();
    this.inputSvc.showPrompt(item, index);
    }

  async removeItem(item, index) {
      console.log("Remove Item - ", item, index);
      const toast = await this.toastController.create({
        message: 'Delete Item - ' + " " + item.name,
        duration: 3000,
        // position: 'bottom',
      });
      toast.present();

      this.inputSvc.warningPrompt(item, index);
    }
  async shareItem(item, index) {
    console.log("Share Item - ", item, index);
    const toast = await this.toastController.create({
      message: 'Share Item - ' + " " + item.name,
      duration: 5000,
      // position: 'bottom',
    });
    toast.present();

    // Check if sharing via email is supported
    let message = "Pantry Item: " + item.name + " " + "Quantity: " + item.qty;
    let subject = "Item Shared via What's In My Pantry App";
    this.socialShare.share().then(() => {
      // Sharing via email is possible
      console.log("Shared successfully!");
    }).catch((error) => {
      // Sharing via email is not possible
      console.error("Error sharing item");
    });
  }

  async pictureLocation(item, index) {
    console.log("Photograph Item Location - ", item, location);
    const toast = await this.toastController.create({
      message: 'Take Picture of Item Location - ' + " " + item.name + " " + item.location,
      duration: 5000,
      // position: 'bottom',
    });
    toast.present();
      
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // Do something with the new photo

    }, (err) => {
     // Handle error
     console.log("Camera issue: " + err);
    });

    // let message = "Pantry Item: " + item.name + " " + "Quantity: " + item.qty;
    // let subject = "Item Shared via What's In My Pantry App";
    // this.socialShare.share().then(() => {
    //   // Sharing via email is possible
    //   console.log("Shared successfully!");
    // }).catch((error) => {
    //   // Sharing via email is not possible
    //   console.error("Error sharing item");
    // });
  }





}
