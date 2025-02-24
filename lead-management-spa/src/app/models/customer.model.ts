import { AdditionalContact } from "./additional-contact.model";

export interface Customer {
    id: number;
    firstName: string;
    suburb: string;
    additionalContact: AdditionalContact;
}