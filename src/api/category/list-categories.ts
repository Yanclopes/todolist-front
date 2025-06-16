import {api} from "../../services/api";
import {PagedResponse} from "../../types/responses/PagedResponse";
import {PagedQuery} from "../../types/responses/PagedQuery";
import {Category} from "../../types/entities/Category";

interface ListCategoriesQuery extends PagedQuery {}

export const ListCategories = async (params: ListCategoriesQuery) => {
    const response = await api.get<PagedResponse<Category[]>>('category', {params});
    return response.data;
}