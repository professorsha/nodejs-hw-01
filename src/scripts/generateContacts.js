import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import * as fs from 'node:fs/promises';

const generateContacts = async (number) => {
  let arrayContacts = [];
  if (number) {
    for (let i = 0; i < number; i++) {
      arrayContacts.push(createFakeContact());
    }
  } else {
    console.log('Додавати 0 немає сенсу');
  }
  const fileContent = await fs.readFile(PATH_DB, 'utf-8');
  if (fileContent) {
    fs.readFile(PATH_DB, 'utf-8')
      .then((data) => JSON.parse(data).concat(arrayContacts))
      .then((data) => fs.writeFile(PATH_DB, JSON.stringify(data, undefined, 2)))
      .catch((error) => console.error(error));
  } else {
    fs.writeFile(PATH_DB, JSON.stringify(arrayContacts, undefined, 2));
  }
};
generateContacts(2);
