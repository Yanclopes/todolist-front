import { Task } from "./Task";

export interface Tag {
    id: number;
    name: string;
    tasks: Task[];
}
