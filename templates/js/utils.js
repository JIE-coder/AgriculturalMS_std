
window.utils = {
	mqttServerUrl: 'ws://192.168.1.200:8083/mqtt' ,
	// mqttServerUrl: 'ws://localhost:8083/mqtt' ,
	// serverUrl: 'http://localhost:8080/data/getAll',
	serverUrl: 'http://192.168.1.210:8080/data/getAll1',
    
	// serverAddUrl: 'http://192.168.1.102:8080/data/insertcard1?username=',
	// topicPub: 'setData',
    
	topicPub: 'controlData',
	// topicSub: 'getData',
	topicSub: 'showData',
	topicSub2: 'PeopleFlag',
    topicSub3: 'modelData',
	topicOnline: 'onlineData',
    
}

window.dateFormat = function(fmt, date){
    let ret;
    console.log('')

    
    const opt = {
        "Y+": date.getFullYear().toString(),        // 年
        "m+": (date.getMonth() + 1).toString(),     // 月
        "d+": date.getDate().toString(),            // 日
        "H+": date.getHours().toString(),           // 时
        "M+": date.getMinutes().toString(),         // 分
        "S+": date.getSeconds().toString()          // 秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
            fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
        };
    };
    return fmt;
}

window.getNowDate = function(){
    var datetime = new Date();    // 获取当前时间

    // 获取年月日时分秒值  slice(-2)过滤掉大于10日期前面的0
    var year = datetime.getFullYear(),
        month = ("0" + (datetime.getMonth() + 1)).slice(-2),
        date = ("0" + datetime.getDate()).slice(-2),
        hour = ("0" + datetime.getHours()).slice(-2),
        minute = ("0" + datetime.getMinutes()).slice(-2),
        second = ("0" + datetime.getSeconds()).slice(-2);
    // 拼接
    var resTime = year + "-"+ month +"-"+ date +" "+ hour +":"+ minute +":" +   second;
    // 返回
    // console.log(resTime) // 当前时间（2020-04-19 23:20:31）
    return resTime
}
/* 
MQTT:
	ws://1.117.36.123:8083/mqtt
	ws://127.0.0.1:8083/mqtt
	ws://172.16.47.125:8083/mqtt
	ws://192.168.43.55:8083/mqtt

TOPIC
	getData
	setData

*/