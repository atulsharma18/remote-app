import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environment/environment';
import { IPaidPremiumDetails } from 'src/model/ipaid-premium-details';

@Component({
  selector: 'app-microfrontend',
  templateUrl: './microfrontend.component.html',
  styleUrls: ['./microfrontend.component.scss']
})
export class MicrofrontendComponent  {

  public counter = 0;

  constructor() {
    window.addEventListener("controlMfeCounter", () => {
      this.handleCounter();
    });
  }

  handleCounter() {
    this.counter += 1;
  }

  handleHostText (e: any) {
    const customEvent = new CustomEvent("controlHostText", {detail: e?.target?.value});
    window.dispatchEvent(customEvent);
  }

}
