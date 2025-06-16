import { User } from './User';
import {Tag} from "./Tag";
import {Category} from "./Category";

export interface Task {
    id: number;
    title: string;
    description?: string | null;
    isDone: boolean;
    user: User;
    category?: Category | null;
    tags: Tag[];
    createdAt: Date;
    updatedAt: Date;
}
