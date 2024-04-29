import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor(private loadingController: LoadingController) { }

  async present() {
    const loading = await this.loadingController.create({
      message: 'Loading...',
      duration: 3000
    });
    await loading.present();
  }

  async dismiss() {
    await this.loadingController.dismiss();
  }
}
