import axios from 'axios'
import { toast } from 'react-toastify'

export const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})

api.interceptors.response.use(
    response => response,
    error => {
        const status = error.response?.status
        const message =
            error.response?.data?.message ||
            error.message ||
            'Ocorreu um erro inesperado.'
        if (status === 401) {
            toast.error('Não autorizado. Faça login novamente.')
        } else if (status === 403) {
            toast.error('Acesso negado.')
        } else if (status === 404) {
            toast.error('Recurso não encontrado.')
        } else if (status === 500) {
            toast.error('Erro interno no servidor.')
        } else {
            toast.error(message)
        }
        return Promise.reject(error)
    }
)
