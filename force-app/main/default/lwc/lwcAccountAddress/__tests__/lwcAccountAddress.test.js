import { createElement } from 'lwc';
import LwcAccountAddress from 'c/lwcAccountAddress';
describe('c-lwc-account-address', () => {
 afterEach(() => {
 // The jsdom instance is shared across test cases in a single file so reset the DOM
 while (document.body.firstChild) {
 document.body.removeChild(document.body.firstChild);
 }

 });
 // Helper function to wait until the microtask queue is empty. This is needed for promise
 // timing when calling imperative Apex.
 async function flushPromises() {
 return Promise.resolve();
 }
 it('does not show details by default', () => {
 // Create element
 const element = createElement('c-lwc-account-address', {
 is: LwcAccountAddress
 });
 document.body.appendChild(element);
 // Verify displayed message
 const detailEl = element.shadowRoot.querySelector(
 '.slds-var-m-vertical_medium'
 );
 expect(detailEl.textContent).toBe('Not showing.');
 });
 it('shows details when checkbox toggled', async () => {
 // Create element
 const element = createElement('c-lwc-account-address', {
 is: LwcAccountAddress
 });
 document.body.appendChild(element);
 const OUTPUT_FIELDS = ['ShippingAddress'];
 const RECORD_ID_INPUT = '0031700000pJRRSAA4';
 const OBJECT_API_NAME_INPUT = 'Account';
 // Set public properties
 element.recordId = RECORD_ID_INPUT;
 element.objectApiName = OBJECT_API_NAME_INPUT;
 document.body.appendChild(element);
 // Toggle checkbox to show details
 const inputEl = element.shadowRoot.querySelector('lightning-button');
 inputEl.dispatchEvent(new CustomEvent('click'));
 
 // Wait for any asynchronous DOM updates
 await flushPromises();
 const outputFieldNames = Array.from(
 element.shadowRoot.querySelectorAll('lightning-output-field')
 ).map((outputField) => outputField.fieldName);
 expect(outputFieldNames).toEqual(OUTPUT_FIELDS);
 });
 it('is accessible when details are visible', async () => {
 const element = createElement('c-lwc-account-address', {
 is: LwcAccountAddress
 });
 document.body.appendChild(element);
 // Toggle checkbox to show details
 const inputEl = element.shadowRoot.querySelector('lightning-button');
 inputEl.dispatchEvent(new CustomEvent('click'));
 // Wait for any asynchronous DOM updates
 await flushPromises();
 await expect(element).toBeAccessible();
 });
 it('is accessible when details are not visible', async () => {
 const element = createElement('c-lwc-account-address', {
 is: LwcAccountAddress
 });
 document.body.appendChild(element);
 await expect(element).toBeAccessible();
 });
});
