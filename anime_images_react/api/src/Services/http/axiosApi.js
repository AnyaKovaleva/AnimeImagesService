import axios from "axios";
const axiosApi = axios.create()
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
const postNewProjectOwner = (
    img
) => {

    const formData = new FormData()

    formData.append('krya', 'test string')
    formData.append('file', img, img.name)

    console.log(formData)

    return axiosApi.post('api/anime-image', formData)
}

const getHi = () => {
    // return axiosApi.get('http://84.252.142.47:1337/api/news-feeds?populate=deep,3&pagination[limit]=500')
    return axiosApi.get('http://localhost:8000/hello')



}

export {
    axiosApi,
    postNewProjectOwner,
    getHi
};