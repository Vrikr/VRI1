import { createElement } from 'lwc';
import lwcContactDetails from 'c/lwcContactDetails';
describe('c-lwc-contact-details', () => {
 afterEach(() => {
 // The jsdom instance is shared across test cases in a single file so
//reset the DOM
 while (document.body.firstChild) {
 document.body.removeChild(document.body.firstChild);
 }
 });
 it('renders lightning-record-view-form with given input values', () => {
 const RECORD_ID_INPUT = '0031700000pJRRSAA4';
 const OBJECT_API_NAME_INPUT = 'Contact';
 // Create initial element
 const element = createElement('c-lwc-contact-details', {
 is: lwcContactDetails
 });
 // Set public properties
 element.recordId = RECORD_ID_INPUT;
 element.objectApiName = OBJECT_API_NAME_INPUT;
 document.body.appendChild(element);
 // Validate if correct parameters have been passed to base components
 const formEl = element.shadowRoot.querySelector(
 'lightning-record-view-form'
 );
 expect(formEl.recordId).toBe(RECORD_ID_INPUT);
 expect(formEl.objectApiName).toBe(OBJECT_API_NAME_INPUT);
 });
 it('renders given set of lightning-outputfield`s in specific order', () => {
 const OUTPUT_FIELDS = ['Name', 'Title', 'Email'];
 const RECORD_ID_INPUT = '0031700000pJRRSAA4';
 const OBJECT_API_NAME_INPUT = 'Contact';
 // Create initial element
 const element = createElement('c-lwc-contact-details', {
 is: lwcContactDetails
 });
 // Set public properties
 element.recordId = RECORD_ID_INPUT;
 element.objectApiName = OBJECT_API_NAME_INPUT;
 document.body.appendChild(element);
 const outputFieldNames = Array.from(
 element.shadowRoot.querySelectorAll('lightning-output-field')
 ).map((outputField) => outputField.fieldName);
 expect(outputFieldNames).toEqual(OUTPUT_FIELDS);
 });
 it('is accessible', async () => {
 const element = createElement('c-lwc-contact-details', {
 is: lwcContactDetails
 });
  document.body.appendChild(element);
  await expect(element).toBeAccessible();
 });
});
