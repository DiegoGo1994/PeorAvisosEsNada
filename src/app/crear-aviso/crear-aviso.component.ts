import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { IonSearchbar, IonThumbnail, IonHeader, IonImg, IonItem, IonLabel, IonList, IonContent, IonTitle, IonToolbar, IonButton, IonIcon, IonButtons } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AvisosService } from '../servicios/avisos.service';

@Component({
  selector: 'app-crear-aviso',
  templateUrl: './crear-aviso.component.html',
  styleUrls: ['./crear-aviso.component.scss'],
  standalone: true,
  imports: [IonThumbnail,IonButtons, IonIcon, IonButton, IonToolbar, IonTitle, IonContent,
    IonList, IonLabel, IonItem, IonImg, IonHeader, IonSearchbar, CommonModule, FormsModule]

})
export class CrearAvisoComponent {
  nuevoAviso = {
    titulo: 'Perro perdido',
    descripcion: 'Visto por Manuela Errazuriz',
    foto: 'src/assets/perrito-perdido.jpg',
    fecha: new Date()
  };

  constructor(private camera: Camera, private avisosService: AvisosService) {}

  tomarFoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData: string) => {
      this.nuevoAviso.foto = 'data:image/jpeg;base64,' + imageData;
    }, (error: any) => {
      console.error('Error al tomar la foto', error);
    });
  }

  guardarAviso() {
    this.avisosService.guardarAviso(this.nuevoAviso).then(() => {
      console.log('Aviso guardado');
    }).catch(error => {
      console.error('Error al guardar el aviso', error);
    });
  }
}