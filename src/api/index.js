import axios from './request';

export const getRecommendList = () => {
    return axios.get("/rexxar/api/v2/subject_collection/book_fiction/items?os=ios&callback=jsonp1&start=0&count=8&loc_id=0&_=1589204373693")
}