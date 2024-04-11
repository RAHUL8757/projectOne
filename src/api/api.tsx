import { IGetAllPostDetails, IGetAllPostList } from './api-type'
import axios from './baseUrlSetUp'

export const getPostList = async():Promise<IGetAllPostList> => {
  return axios
  .get(`/posts`)
  .then((res) => res.data)
}

export const getPostDetails = async(id:number):Promise<IGetAllPostDetails> => {
  return axios
  .get(`/posts/${id}`)
  .then((res) => res.data)
}