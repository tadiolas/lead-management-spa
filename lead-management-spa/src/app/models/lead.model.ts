import { Category } from "./category.model"
import { Customer } from "./customer.model";

export interface Lead {
    category: Category;
    categoryId: number;
    customer: Customer;
    customerId: number;
    description: string;
    discountPercentage: number;
    id: number;
    price: number
    status: number;
    dateCreated: Date;
}
