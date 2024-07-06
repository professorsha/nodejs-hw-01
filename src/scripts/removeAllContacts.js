import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const removeAllContacts = async () => {
fs.writeFile(PATH_DB,'');
};

removeAllContacts();
