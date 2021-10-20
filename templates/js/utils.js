
window.utils = {
	mqttServerUrl: 'ws://127.0.0.1:8083/mqtt' ,
	serverUrl: 'http://192.168.43.52:8080/data/',
	topicPub: 'setData',
	topicSub: 'getData',
	topicOnline: 'onlineData'
}

window.dateFormat = function(fmt, date){
    let ret;
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