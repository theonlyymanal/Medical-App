import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

declare var paypal: any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  paypalScript: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.addPaypalScript();
    }
  }

  addPaypalScript(): any {
    let clientId: string = '<EI5mW5jPOBTTmYT5a1977Z3ydn9xnx-X8goWWblh2sCBdi4qp_rbnU0Q2OpnPtObesAPzwGtZpD_5bVy>';
    let currency: string = 'EUR';

    this.paypalScript = true;
    return new Promise((resolve, reject) => {
      let scriptTagElement = document.createElement('script');
      scriptTagElement.src='https://www.paypal.com/sdk/js?currency=EUR&client-id=AVGt-lRsoGol1AdmOCYEhfwQ-8yE8KFiMGib2rCcysitQXlTFO5YZOcf-x1pUY3L7io0hPwlqULN2N9x';

      scriptTagElement.onload = resolve;
      document.body.appendChild(scriptTagElement);
    });
  }

  renderPayPalButton() {
    if (this.paypalScript) {
      paypal.Buttons({
        createOrder: (data: any, actions: any) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: '300'
              }
            }]
          });
        },
        onApprove: (data: any, actions: any) => {
          return actions.order.capture().then((details: any) => {
            alert('Transaction completed by ' + details.payer.name.given_name);
            // Call your server to save the transaction
            fetch('/paypal-transaction-complete', {
              method: 'post',
              headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify({
                orderID: data.orderID
              })
            });
          });
        }
      }).render('#paypal-button-container');
    }
  }
}
