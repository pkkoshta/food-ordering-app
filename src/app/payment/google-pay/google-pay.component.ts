import { Component } from '@angular/core';

@Component({
  selector: 'app-google-pay',
  templateUrl: './google-pay.component.html',
  styleUrls: ['./google-pay.component.css']
})
export class GooglePayComponent {

  environment="TEST"
  buttonType="buy"
  buttonColor="black"


  paymentRequest : google.payments.api.PaymentDataRequest={
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type:'CARD',
        parameters:{
          allowedAuthMethods:['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks:['AMEX', 'VISA', 'MASTERCARD']
        },
        tokenizationSpecification:{
          type:'PAYMENT_GATEWAY',
          parameters:{
            gateway:'example',
            gatewayMarchantId:'232423'
          }
        }
      }
    ],
    merchantInfo:{
      merchantId:'12345678901234567890',
      merchantName:'Demo Marchant'
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: '100.00',
      currencyCode: 'INR',
      countryCode: 'IND'
    },
    callbackIntents:['PAYMENT_AUTHORIZATION']
  };

  onLoadPaymentData=(event:Event):void=>{
  
    const eventDetail = event as CustomEvent<google.payments.api.PaymentData>;
    console.log('load payment data' , eventDetail.detail);

  }

  onPaymentDataAuthorized:google.payments.api.PaymentAuthorizedHandler=(
    paymentData)=>{
      console.log('payment authorized ', paymentData);
      return {
        transactionState:'SUCCESS'
      };
    }
  
    onError=(event:ErrorEvent)=>{
      console.error('error ocured', event.error)
    }


  

}


