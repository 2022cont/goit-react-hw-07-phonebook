import axios from "axios";

axios.defaults.baseURL = "https://6414c9ade8fe5a3f3a0f92fb.mockapi.io";

export async function getContacts() {
    const response = await axios.get(`/contact`);
    return response.data;
};

export async function getContactsId(contactId) {
    const response = await axios.delete(`/contact/${contactId}`)
    return response.data;
};

export async function getAddContact(contact) {
    const response = await axios.post(`/contact`, contact);
    return response.data;
};