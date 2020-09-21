import apisauce from 'apisauce'
import { BASE_URL } from '../../constants/urls'

const create = () => {
    const api = apisauce.create({
        baseURL: BASE_URL,
    })

    const request = ({ path, params, method = 'get', instance = api } = {}) =>
        instance[method.toLowerCase()](path, params).then(response => {
            const { status } = response
            if (status !== 401) {
                return response
            }
            return response
        })

    const getMovies = () => request({ path: '/movies' })

    const turnOnServer = ({ id }) =>
        request({ path: `/movies/${id}/on`, method: 'PUT' })

    const turnOffServer = ({ id }) =>
        request({ path: `/movies/${id}/off`, method: 'PUT' })
    const rebootServer = ({ id }) =>
        request({ path: `/movies/${id}/reboot`, method: 'PUT' })
    const getServer = ({ id }) =>
        request({ path: `/movies/${id}`, method: 'GET' })

    return {
        instance: api,
        request,
        getMovies,
        turnOnServer,
        turnOffServer,
        rebootServer,
        getServer,
    }
}

export default {
    create,
}
