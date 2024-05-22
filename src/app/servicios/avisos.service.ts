import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AvisosService {

  constructor(private storage: Storage) { }

  guardarAviso(nuevoAviso: any) {
    return this.storage.get('avisos').then((avisos: any[]) => {
      if (!avisos) {
        avisos = [];
      }
      avisos.push(nuevoAviso);
      return this.storage.set('avisos', avisos);
    });
  }

  obtenerAvisos() {
    return this.storage.get('avisos');
  }

  eliminarAviso(avisoId: number) {
    return this.storage.get('avisos').then((avisos: any[]) => {
      const nuevosAvisos = avisos.filter(aviso => aviso.id !== avisoId);
      return this.storage.set('avisos', nuevosAvisos);
    });
  }
}
