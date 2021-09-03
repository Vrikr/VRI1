import { LightningElement, wire, api } from 'lwc';
import getTotalContact from '@salesforce/apex/MyAccControler.getTotalContact';
export default class LwcAccTotalCtc extends LightningElement {
 @api recordId;
 total;
 error;
 @wire(getTotalContact, { acccountId: '$recordId'})
 wiredContacts({ error, data }) {
 if (data) {
 this.total = data;
 this.error = undefined;
 } else if (error) {
 this.error = error;
 this.total = undefined;
 }
 }
}
