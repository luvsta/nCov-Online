import request from '@/../config/request'

// 异步获取所有疫情信息
export async function get_all_data() {
    let url = 'https://lab.isaaclin.cn/nCoV/api/overall'
    return request("GET", url)
}

// 异步获取谣言信息
export async function get_all_rumors() {
    let url = 'https://lab.isaaclin.cn/nCoV/api/rumors'
    return request("GET", url)
}

