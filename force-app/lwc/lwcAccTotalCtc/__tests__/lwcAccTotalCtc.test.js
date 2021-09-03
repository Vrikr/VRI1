import { createElement } from 'lwc';
import LwcAccTotalCtc from 'c/lwcAccTotalCtc';
import getTotalContact from '@salesforce/apex/MyAccControler.getTotalContact';
import { registerApexTestWireAdapter } from '@salesforce/sfdx-lwc-jest';
// Realistic data with a list of contacts
const mockGetTotalContact = require('./data/getTotalContact.json');
// Register as Apex wire adapter. Some tests verify that provisioned values trigger desired behavior.
const getTotalContactAdapter = registerApexTestWireAdapter(getTotalContact);
describe('c-lwc-acc-total-ctc', () => {
 afterEach(() => {
 // The jsdom instance is shared across test cases in a single file soreset the DOM
 while (document.body.firstChild) {
 document.body.removeChild(document.body.firstChild);
 }
 // Prevent data saved on mocks from leaking between tests
 jest.clearAllMocks();
 });
 // Helper function to wait until the microtask queue is empty. This is needed for promise
 // timing when calling imperative Apex.
 async function flushPromises() {
 return Promise.resolve();
 }
 describe('getTotalContact @wire', () => {
 it('renders 10', async () => {
 // Create initial element
 const element = createElement('c-lwc-acc-total-ctc', {
 is: LwcAccTotalCtc
 });
 document.body.appendChild(element);
 // Emit data from @wire
 getTotalContactAdapter.emit(mockGetTotalContact);
 // Wait for any asynchronous DOM updates
 await flushPromises();
 // Select elements for validation
 const detailEls = element.shadowRoot.querySelector('.total');
 expect(detailEls.textContent).toBe('10');
 });
 it('throw error', () => {
 const element = createElement('c-lwc-acc-total-ctc', {
 is: LwcAccTotalCtc
 });
 document.body.appendChild(element);
 
 // Emit error from @wire
 getTotalContactAdapter.error();
 
 return Promise.resolve().then(() => {
 // Select elements for validation
 const detailEls = element.shadowRoot.querySelector('.total');
 expect(detailEls.textContent).toBe('');
 });
 });
 }); 
 });