import { Component } from '@angular/core';
import { IconResolver, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  constructor(private icon_registorer: MatIconRegistry, private domSanatizer: DomSanitizer) {

    this.icon_registorer.addSvgIcon("gmail_icon", this.domSanatizer.bypassSecurityTrustResourceUrl('assets/icons8-gmail.svg'));

  }

}
