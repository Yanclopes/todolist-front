import {api} from "../../services/api";
import {PagedResponse} from "../../types/responses/PagedResponse";
import {Task} from "../../types/entities/Task";
import {PagedQuery} from "../../types/responses/PagedQuery";
import {User} from "../../types/entities/User";

interface ListUsersQuery extends PagedQuery {}

export const ListUsers = async (params: ListUsersQuery) => {
    const response = await api.get<PagedResponse<User[]>>('user', {params});
    return response.data;
}