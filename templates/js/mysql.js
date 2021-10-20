
const mysql = require('mysql')

  var resData = [];
  var isFlag_2 = 0;
  // const mqtt = require('mqttjs')
  
  var options2 = {
				//mqtt客户端的id，这里面应该还可以加上其他参数，具体看官方文档
				clientId: 'mqttjs_' + Math.random().toString(16).substr(2, 8)
			};
	//console.log(options.clientId);
	//浏览器采用websocket协议，host主机地址为192.168.0.200，端口为8083，路径为/mqtt
	// var client = mqtt.connect("ws://1.117.36.123:8083/mqtt", options); // you add a ws:// url here
	var client2 = mqtt.connect("ws://127.0.0.1:8083/mqtt", options2); // you add a ws:// url here
	// var client = mqtt.connect("ws://172.16.47.125:8083/mqtt", options); // you add a ws:// url here
	// var client = mqtt.connect("ws://192.168.43.55:8083/mqtt", options); // you add a ws:// url here
	
  client2.on('connect', function () {
		console.log("_connect success!");
		client2.subscribe('data', { qos : 0 }, function (err, granted) {
			if (!err) {
				console.log("_subscribe success!" + new Date());
				//发布主题getipd,消息内容为Hello mqtt

				console.log("error");
      }
		})
	});
  
  const mysql = require('mysql');


  client2.on('message', function (topic, payload, packet) {

    jsonStr = payload.toString("utf8");
    json_obj = JSON.parse(jsonStr);


    // if(isFlag_2 == 0){
      // 1 引入
      const mysql = require('mysql');
      // 2 创建链接配置
      const conn = mysql.createConnection({
          host:'localhost',   // 主机名 （服务器地址）
          user:'root',    //用户名
          password:'root',    // 密码
          database:'course',  // 写上自己要连接的数据库名字
      })
      // 3 建立链接
      conn.connection()
      // 4 生成sql语句 增删改查操作
      let sql = 'select sname from student where ssex="' + json_obj.sex + '";';
      //5  执行sql语句
      conn.query(sql, (err, result) => {
          if(err){
              console.log("发生错误"+ err +new Date());
          }
          // 6 处理结果
          resData = result
          console.log(result)
      });
      // isFlag_2 = 1;
    // }

  })

  