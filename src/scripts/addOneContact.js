import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  let oneContact = createFakeContact();

  fs.readFile(PATH_DB, 'utf-8')
    .then((data) => JSON.parse(data).concat(oneContact))
    .then((data) => fs.writeFile(PATH_DB, JSON.stringify(data, undefined, 2)))
    .catch(console.error);
    
};

addOneContact();
