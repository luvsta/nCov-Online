import { get_all_data, get_all_rumors } from './service.js';
// 初始化分支数据
const state = {
    updateTime: " ",
    rumors: [],
    confirmedCount: 0,
    suspectedCount: 0,
    deadCount: 0,
    curedCount: 0,
    confirmedIncr: 0,
    suspectedIncr: 0,
    deadIncr: 0,
    curedIncr: 0,


    infectSource: "该字段已替换为说明2",
    passWay: "该字段已替换为说明3",
    dailyPic: "https://img1.dxycdn.com/2020/0206/182/3395066264069857632-135.png,https://img1.dxycdn.com/2020/0206/294/3395066274807276565-135.png,https://img1.dxycdn.com/2020/0206/407/3395066281249457782-135.png,https://img1.dxycdn.com/2020/0206/449/3395066289839395270-135.png,https://img1.dxycdn.com/2020/0206/973/3395066296282114727-135.png,https://img1.dxycdn.com/2020/0206/353/3395066304871785502-135.png",
    dailyPics: [
        "https://img1.dxycdn.com/2020/0206/182/3395066264069857632-135.png",
        "https://img1.dxycdn.com/2020/0206/294/3395066274807276565-135.png",
        "https://img1.dxycdn.com/2020/0206/407/3395066281249457782-135.png",
        "https://img1.dxycdn.com/2020/0206/449/3395066289839395270-135.png",
        "https://img1.dxycdn.com/2020/0206/973/3395066296282114727-135.png",
        "https://img1.dxycdn.com/2020/0206/353/3395066304871785502-135.png"
    ],
    summary: "",
    countRemark: "",
    seriousCount: 3859,

    seriousIncr: 640,
    virus: "该字段已替换为说明1",
    remark1: "易感人群：人群普遍易感。老年人及有基础疾病者感染后病情较重，儿童及婴幼儿也有发病",
    remark2: "潜伏期：一般为 3～7 天，最长不超过 14 天，潜伏期内可能存在传染性，其中无症状病例传染性非常罕见",
    remark3: "宿主：野生动物，可能为中华菊头蝠",
    remark4: "",
    remark5: "",
    note1: "病毒：新型冠状病毒 2019-nCoV",
    note2: "传染源：新型冠状病毒感染的患者。无症状感染者也可能成为传染源。",
    note3: "传播途径：经呼吸道飞沫和接触传播是主要的传播途径。气溶胶和消化道等传播途径尚待明确。",
    generalRemark: "疑似病例数来自国家卫健委数据，目前为全国数据，未分省市自治区等",
    abroadRemark: "",
    marquee: [],
}

const actions = {
    async get_all_data_action(context) {
        let record = await get_all_data();
        if (record.success) {
            let result = record.results[0];
            context.commit("get_all_data_success", result);
        }
    },
    async get_all_rumors_action(context) {
        let record = await get_all_rumors();
        // console.log(record)
        if (record.success) {
            let result = record.results;
            context.commit("get_all_rumors_success", result);
        }
    }
}

// 在vuex中通过mutations更新store
const mutations = {
    get_all_data_success(state, payload) {
        state.updateTime = new Date(parseInt(payload.updateTime)).toLocaleString().replace(/:\d{1,2}$/, ' ');
        state.confirmedCount = payload.confirmedCount;
        state.suspectedCount = payload.suspectedCount;
        state.deadCount = payload.deadCount;
        state.curedCount = payload.curedCount;
        state.confirmedIncr = payload.confirmedIncr;
        state.suspectedIncr = payload.suspectedIncr;
        state.deadIncr = payload.deadIncr;
        state.curedIncr = payload.curedIncr;
    },
    get_all_rumors_success(state, payload) {
        state.rumors = payload;
    }
}

export default {
    namespaced: true, // 声明分模块的store需要加上 
    state,
    mutations,
    actions
};
