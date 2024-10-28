import { Component } from '@angular/core';
import { Filesystem, Directory } from '@capacitor/filesystem';
import jsPDF from 'jspdf';
import { ToastController, Platform } from '@ionic/angular';
import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {
  texto: string = ''; 
  mostrarToast: boolean = false; 
  mensajeToast: string = '';

  constructor(private toastController: ToastController, private platform: Platform) {}

  async guardarTexto() {
    if (!this.texto) {
      const toast = await this.toastController.create({
        message: 'El texto no puede estar vacío.',
        duration: 2000,
        position: 'top',
        color: 'danger'
      });
      await toast.present();
      return;
    }

    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('Texto Guardado:', 10, 10);
    doc.setFontSize(12);
    doc.text(this.texto, 10, 20);
    
    const nombreArchivo = 'TuTexto.pdf';
    const pdfOutput = doc.output('arraybuffer'); // Exportar como array buffer para un archivo binario

    try {
      await Filesystem.writeFile({
        path: nombreArchivo,
        data: this.arrayBufferToBase64(pdfOutput), // Convertimos array buffer a base64
        directory: Directory.Documents,
        recursive: true, 
      });

      const toast = await this.toastController.create({
        message: 'Documento guardado',
        duration: 2000,
        position: 'top',
        color: 'success',
        buttons: [
          {
            text: 'Abrir',
            handler: () => {
              this.abrirDocumento(nombreArchivo);
            }
          }
        ]
      });
      await toast.present();
    } catch (err) {
      const toast = await this.toastController.create({
        message: 'Error al guardar el archivo: ' + err,
        duration: 2000,
        position: 'top',
        color: 'danger'
      });
      await toast.present();
    }

    this.texto = ''; 
  }

  // Convertir ArrayBuffer a base64 para guardar en archivo
  private arrayBufferToBase64(buffer: ArrayBuffer): string {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  }

  // Abrir el documento después de guardarlo
  async abrirDocumento(nombreArchivo: string) {
    try {
      const fileResult = await Filesystem.getUri({
        directory: Directory.Documents,
        path: nombreArchivo
      });

      const path = fileResult.uri;

      if (Capacitor.getPlatform() === 'web') {
        window.open(path, '_blank');
      } else {
        window.open(path, '_system');
      }
    } catch (err) {
      const toast = await this.toastController.create({
        message: 'Error al abrir el archivo: ' + err,
        duration: 2000,
        position: 'top',
        color: 'danger'
      });
      await toast.present();
    }
  }
}