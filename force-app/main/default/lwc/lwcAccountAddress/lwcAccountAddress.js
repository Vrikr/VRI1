import { LightningElement, api, track } from 'lwc';
export default class LwcAccountAddress extends LightningElement {
 @api recordId;
 @api objectApiName; 
 @track showAddress = false;
 
 handleShowButtonClick(e){
 this.showAddress = true;
 }
}