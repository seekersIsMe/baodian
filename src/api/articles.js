// article.js
import axios from 'axios'
 
export function getArticles() {
    return axios.get('/api/article')  // mockjs返回的接口
}