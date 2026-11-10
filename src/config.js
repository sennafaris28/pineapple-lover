// ============================================================
//  CLOUD SYNC CONFIG  —  fill these in to turn on online storage.
//  Leave databaseURL blank to run local-only (localStorage) in this browser.
// ============================================================
export const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyCUt0mzlONnY0w91Bg2UiWBgM8Oz9t3iH4',
  authDomain: 'pineapple-lover.firebaseapp.com',
  databaseURL: 'https://pineapple-lover-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'pineapple-lover',
  storageBucket: 'pineapple-lover.firebasestorage.app',
  messagingSenderId: '1004730650139',
  appId: '1:1004730650139:web:bed40a2503a6c4529b72be',
};

// Shared workspace id — both partners must use the SAME value. Letters, numbers, dashes only.
export const WEDDING_ID = 'pineapple-wedding';

// Cloud sync turns on only when a databaseURL is present.
export const cloudEnabled = !!FIREBASE_CONFIG.databaseURL;

// localStorage key for the offline cache.
export const STORAGE_KEY = 'weddingDashReactV1';

// Tab order: [key, label]. `overview` is the landing tab.
export const TABS = [
  ['overview', 'Overview'],
  ['budget', 'Budget'],
  ['ceremony', 'Wedding Ceremony'],
  ['seserahan', 'Seserahan'],
  ['mahar', 'Mahar & Mas Kawin'],
  ['guests', 'Guests'],
  ['vendors', 'Vendors'],
  ['adat', 'Adat & Rituals'],
  ['legal', 'Legal'],
  ['rundown', 'Rundown'],
  ['data', 'Backup'],
];

// Shared column set for the itemised cost tables (Ceremony / Seserahan / Mahar).
const itemCols = (paidLabel) => [
  { h: 'Item', type: 'text' },
  { h: 'Qty', type: 'text' },
  { h: 'Unit price', type: 'num' },
  { h: 'Vendor', type: 'text' },
  { h: paidLabel, type: 'select', opts: ['no', 'yes'] },
  { h: 'Notes', type: 'text' },
  { h: 'Marketplace link', type: 'link' },
];

// Column definitions for every editable table, keyed by the slice field name.
export const COLS = {
  ceremony: itemCols('Paid'),
  seserahan: itemCols('Bought'),
  maharkawin: itemCols('Bought'),
  guests: [
    { h: 'Name', type: 'text' },
    { h: 'Side', type: 'select', opts: ['Groom', 'Bride'] },
    { h: 'Category', type: 'select', opts: ['Family', 'Friends', 'Work', 'VIP'] },
    { h: 'Invited #', type: 'num' },
    { h: 'RSVP', type: 'select', opts: ['Pending', 'Yes', 'No'] },
    { h: 'Table', type: 'text' },
  ],
  vendors: [
    { h: 'Category', type: 'text' },
    { h: 'Vendor', type: 'text' },
    { h: 'Contact', type: 'text' },
    { h: 'Quote', type: 'num' },
    { h: 'DP paid', type: 'num' },
    { h: 'Booked', type: 'select', opts: ['no', 'yes'] },
    { h: 'Notes', type: 'text' },
  ],
  rundown: [
    { h: 'Time', type: 'text' },
    { h: 'Event (acara)', type: 'text' },
    { h: 'PIC', type: 'text' },
  ],
};
