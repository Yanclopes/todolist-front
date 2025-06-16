import {api} from "../../services/api";
import {PagedResponse} from "../../types/responses/PagedResponse";
import {Task} from "../../types/entities/Task";
import {PagedQuery} from "../../types/responses/PagedQuery";

interface ListTasksQuery extends PagedQuery {}

export const ListTasks = async (params: ListTasksQuery) => {
    const response = await api.get<PagedResponse<Task[]>>('task', {params});
    return response.data;
}