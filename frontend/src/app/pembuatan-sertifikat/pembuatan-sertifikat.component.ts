import { Component, ViewChild, ElementRef } from '@angular/core';
import { CertificateService } from '../certificate.service';
import * as moment from 'moment';
import 'moment/locale/id';

interface Recipient {
    name: string;
    role: string;
}

@Component({
    selector: 'app-pembuatan-sertifikat',
    templateUrl: './pembuatan-sertifikat.component.html',
    styleUrls: ['./pembuatan-sertifikat.component.sass']
})
export class PembuatanSertifikatComponent {
    title: string = '';
    description: string = '';
    date: string = '';
    place: string = '';
    recipients: Recipient[] = [];
    recipientName: string = '';
    recipientRole: string = '';
    editingIndex: number = -1;
    editedRecipient: Recipient = { name: '', role: '' };

    @ViewChild('editModal',{static: false}) editModal: ElementRef;

    constructor(private certificateService: CertificateService) { }

    addRecipient() {
      if (this.recipientName.trim() && this.recipientRole.trim()) {
        this.recipients.push({ name: this.recipientName.trim(), role: this.recipientRole.trim() });
        this.recipientName = '';
        this.recipientRole = '';
      }
    }

    openEditModal(recipient: Recipient, index: number) {
      this.editedRecipient = { ...recipient };
      this.editingIndex = index;
      this.openModal();
    }

    updateRecipient() {
      if (this.editedRecipient.name.trim() && this.editedRecipient.role.trim() && this.editingIndex !== -1) {
        this.recipients[this.editingIndex] = { ...this.editedRecipient }; // Update recipient in the list
        this.closeModal();
      }
    }

    deleteRecipient(index: number) {
      if (confirm("Are you sure you want to delete this recipient?")) {
        this.recipients.splice(index, 1);
      }
    }

    openModal() {
      const modal: any = this.editModal.nativeElement;
      modal.classList.add('show');
      modal.style.display = 'block';
      document.body.classList.add('modal-open');
    }

    closeModal() {
      const modal: any = this.editModal.nativeElement;
      modal.classList.remove('show');
      modal.style.display = 'none';
      document.body.classList.remove('modal-open');
    }

    formatDate(date: string): string {
        return moment(date).locale('id').format('dddd, D MMMM YYYY');
    }

    generatePDF() {
        const certificateData = {
            title: this.title,
            description: this.description,
            date: this.formatDate(this.date),
            place: this.place,
            recipients: this.recipients
        };

        this.certificateService.generateCertificate(certificateData).subscribe(blob => {
            const url = window.URL.createObjectURL(blob);
            window.open(url);
        });
    }
}
