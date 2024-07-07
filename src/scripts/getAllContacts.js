import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const getAllContacts = async () => {
   const allContacts=fs.readFile(PATH_DB, { encoding: 'utf8' }).then((data)=>JSON.parse(data)).catch(console.error);
   return allContacts;
};

console.log(await getAllContacts());
