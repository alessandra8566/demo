import { apiPath } from '../config/variable'
import { get, post, del, patch, put } from '../apiService/request'

export const getSatellite = params => get(apiPath.getSatellite + `/${params}`)
export const getGroundStatus = params => get(apiPath.getGroundStation)
