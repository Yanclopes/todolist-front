import {api} from "../../services/api";
import {PagedResponse} from "../../types/responses/PagedResponse";
import {PagedQuery} from "../../types/responses/PagedQuery";
import {Tag} from "../../types/entities/Tag";

interface ListTagsQuery extends PagedQuery {}

export const ListTag = async (params: ListTagsQuery) => {
    const response = await api.get<PagedResponse<Tag[]>>('tag', {params});
    return response.data;
}