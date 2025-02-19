import fs from "fs/promises";
import path from "path";
import { randomUUID } from "crypto";
import contacts from "./contacts.json";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const listContacts = async () => {
  return contacts;
};

const getContactById = async (contactId) => {
  const [contact] = contacts.filter((contact) => contact.id === contactId);
  return contact;
};

const removeContact = async (contactId) => {
  const [foundContact] = contacts.filter((contact) => contact.id === contactId);
  const newContactsList = contacts.filter(
    (contact) => contact.id !== contactId
  );
  await fs.writeFile(
    path.join(__dirname, "contacts.json"),
    JSON.stringify(newContactsList, null, 2)
  );
  return foundContact;
};

const addContact = async ({ name, email, phone }) => {
  const newContact = { name, email, phone, id: randomUUID() };
  contacts.push(newContact);
  await fs.writeFile(
    path.join(__dirname, "contacts.json"),
    JSON.stringify(contacts, null, 2)
  );
  return newContact;
};

const updateContact = async (contactId, body) => {
  const index = contacts.findIndex((contact) => contact.id === contactId);
  if (index !== -1) {
    const updatedContact = {
      id: contactId,
      ...contacts[index],
      ...contacts[index],
      ...body,
    };
    contacts[index] = updatedContact;
    await fs.writeFile(
      path.join(__dirname, "contacts.json"),
      JSON.stringify(contacts, null, 2)
    );
    return updatedContact;
  }
  return null;
};

export default {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
