import { LightningElement, api, track } from 'lwc';
export default class LwcCaseDetails extends LightningElement {
 @api recordId;
 @api objectApiName; 
 @track showDetails = false; 
 handleShowButtonClick(e){
 this.showDetails = true;
 }
}