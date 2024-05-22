import { Component } from '@angular/core';
import { IonSearchbar, IonThumbnail, IonHeader, IonImg, IonItem, IonLabel, IonList, IonContent, IonTitle, IonToolbar, IonButton, IonIcon, IonButtons } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AvisosService } from '../servicios/avisos.service';


@Component({
  selector: 'app-avisos-list',
  templateUrl: './avisos-list.component.html',
  styleUrls: ['./avisos-list.component.scss'],
  standalone: true,
  imports: [IonThumbnail,IonButtons, IonIcon, IonButton, IonToolbar, IonTitle, IonContent,
    IonList, IonLabel, IonItem, IonImg, IonHeader, IonSearchbar, CommonModule, FormsModule]

})
export class AvisosListComponent {
  avisos: any[] = [
    { 
      id: 1,
      titulo: 'Mascota perdida',
      descripcion: 'Se perdió un perrito salchicha en la esquina de Manuel Montt con Los Olivos.',
      fecha: new Date('2024-01-18'),
      foto: 'src/assets/perrito-perdido.jpg'
    },
    {
      id: 2,
      titulo: 'Cédula encontrada',
      descripcion: 'Se encontró una cédula de identidad en la calle.',
      fecha: new Date('2024-01-09'),
      foto: 'src/assets/carnet-perdido.png'
    }
  ];

  constructor(private avisosService: AvisosService) {}

  ngOnInit() {
    this.cargarAvisos();
  }

  cargarAvisos() {
    this.avisosService.obtenerAvisos().then((avisos) => {
      this.avisos = avisos || [];
    });
  }

  confirmarEliminacion(aviso: any) {
    const index = this.avisos.findIndex(item => item.id === aviso.id);
    if (index !== -1) {
      this.avisos.splice(index, 1);
    }
  }
}