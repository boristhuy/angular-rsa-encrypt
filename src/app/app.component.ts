import {Component, OnInit} from '@angular/core';
import { JSEncrypt } from 'jsencrypt';
import { privateKey, publicKey } from './keys';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  input = '';
  result = '';

  jsEncrypt: any;

  constructor() { }

  ngOnInit(): void {
    this.jsEncrypt = new JSEncrypt();
  }

  encrypt(): void {
    const text = `${this.input}`.trim();

    this.jsEncrypt.setPublicKey(publicKey);
    this.result = this.jsEncrypt.encrypt(text);
  }

  decrypt(): void {
    this.jsEncrypt.setPrivateKey(privateKey);
    this.result = this.jsEncrypt.decrypt(this.input);
  }
}
