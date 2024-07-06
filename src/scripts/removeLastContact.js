import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const removeLastContact = async () => {
  const fileContent = await fs.readFile(PATH_DB, 'utf-8');
  const arrayContacts = JSON.parse(fileContent);
  const count = arrayContacts.length;
  const updatedContacts = arrayContacts.slice(0, count - 1);
  fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2), 'utf8');
};

removeLastContact();
