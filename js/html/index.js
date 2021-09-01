//初始化数据库
db = openDatabase('mydb', '1.0', 'Test DB', 200 * 1024 * 1024);
//卡片表
initCard();
//商品表
initGoods();
//消费明细表
initDetail();
//资金池表
initPool();

$(function() {
  //全屏
 // toggleFullScreen();
})

/**
 * 执行数据库操作
 * @param sql 大写
 * @param parems  参数，可为空
 * @param success 成功回调（tx,data）
 * @param error 失败回调（tx,data）
 */
function dbSQL(sql, parems, success, error) {
  db.transaction(function (tx) {
    tx.executeSql(sql, parems, success, error);
  });
}

/**
 * 卡片表
 * @param id  主键ID
 * @param code  编号，用于绑定卡
 * @param img  图片，持有人图片
 * @param name  名称，持有人名称
 * @param quota  消费额度，消费上限
 * @param type  类型，1共享、2独立
 * @param description  描述
 * @param createtime  创建时间，请用 Date.now()
 */
function initCard() {
  db.transaction(function (tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS CARD (id unique, code,img,name,quota,type,description,createtime)');
  });
}

/**
 * 商品表
 * @param id  主键ID
 * @param code  编号，用于绑定商品
 * @param img  图片，商品图片
 * @param name  名称，商品名称
 * @param price  单价，商品单价
 * @param num  库存，商品库存
 * @param description  描述
 * @param createtime  创建时间，请用 Date.now()
 */
function initGoods() {
  db.transaction(function (tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS GOODS (id unique, code,img,name,price,num,description,createtime)');
  });
}

/**
 * 消费明细表
 * @param id  主键ID
 * @param cardcode  卡片编码
 * @param goodscode  商品编码
 * @param num  数量
 * @param price  单价
 * @param amount  小计
 * @param createtime  创建日期
 */
function initDetail() {
  db.transaction(function (tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS DETAIL (id unique, cardcode,goodscode,num,price,amount,createtime)');
  });
}

/**
 * 资金池表
 * @param id  主键ID
 * @param amount  总金额
 * @param consume  已消费消费
 */
function initPool() {
  db.transaction(function (tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS POOL (id unique, amount,consume)');
  });
}

/**
 * 全屏
 */
function toggleFullScreen() {
  if (!document.fullscreenElement && // alternative standard method
    !document.mozFullScreenElement && !document.webkitFullscreenElement) {// current working methods
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    // if (document.cancelFullScreen) {
    //   document.cancelFullScreen();
    // } else if (document.mozCancelFullScreen) {
    //   document.mozCancelFullScreen();
    // } else if (document.webkitCancelFullScreen) {
    //   document.webkitCancelFullScreen();
    // }
  }
}

function toHtml(url) {
 // toggleFullScreen();
  $("#u8_img").get(0).src = url
}

/**
 * 语音播放
 */
function speak(msg) {
  window.speechSynthesis.speak(new SpeechSynthesisUtterance(msg))
  gggg(msg)
}

function  gogo(){

if(mm==0) {
	s=0
}
if(mm==100){
 $('.gogog').remove();
 	window.clearInterval(ggg)
}else if(s==0) {

	$('.gogog').attr('style','opacity:'+(mm++/100)+'')
}else if(s==1){
    $('.gogog').attr('style','opacity:'+(mm--/100)+'')
}
}

function gggg(msg) {
	var div2 = document.createElement("div"); 
	mm = 99;
	s = 1;
  //添加 img
  let img = document.createElement("img");
  //设置 img 属性，如 style
  img.setAttribute("style", "width:200px;height:200px");
  let span = document.createElement("span");
  span.innerHTML = msg;
  if(msg==='支付成功'){
    //设置 img 图片地址
    img.src = "images/超市/u1.png";
    //设置 img 属性，如 style
    img.setAttribute("style", "width:200px;height:200px");
    span.setAttribute("style","color:aliceblue;margin-left:-17px");
  }else if(msg==='无法识别'){
    img.src = "images/超市/u4.png";
    //设置 img 属性，如 style
    img.setAttribute("style", "width:200px;height:200px");
    span.setAttribute("style","color:aliceblue;margin-left:-17px");
  }else if(msg==='用户余额不足'){
    img.src = "images/超市/u3.png";
    //设置 img 属性，如 style
    img.setAttribute("style", "width:246px;height:200px");
    span.setAttribute("style","color:aliceblue;margin-left:-28%");
  }else {
    img.src = "images/超市/u3.png";
    //设置 img 属性，如 style
    img.setAttribute("style", "width:246px;height:200px");
    span.setAttribute("style","color:aliceblue;margin-left:-30%");
  }
  $(div2).append(img)
  //换行
  let br = document.createElement("br");
  $(div2).append(br)
  $(div2).append(span)
   top.document.body.children.base.append($($(div2)).addClass('gogog').get(0));
   ggg = window.setInterval(gogo,20)

}

// 广播
function add(msg) {
	var contentDiv = document.createElement("div");
	contentDiv.id = "wrap";
	top.document.body.children.base.appendChild(contentDiv); 
	var wrap = document.getElementById("wrap");
	var div2 = document.createElement("div");  
	div2.id = "first";
	top.document.body.children.base.append($($(div2).text('爱上科技撒谎加萨科技撒很快就爱山科接撒带回家萨科技挥洒很快就撒很快就sad很快就撒很快就撒谎')).addClass('gogog').get(0));
	wrap.append(div2);
	$('gogog').attr('style','position:fixed;top:50px;left:50px');
	var first = document.getElementById('first');
	var timer = window.setInterval(move, 30);

	function move() {
	  wrap.scrollLeft++;
		if (wrap.scrollLeft >= 26) {
		  // wrap.scrollLeft = 0;
			window.clearInterval(timer)
			$('.gogog').remove()
		}
	  /* if (wrap.scrollLeft >= first.scrollWidth) {
	    wrap.scrollLeft = 0;
	  } */
	}
}

/**
 * 卡片底图
 * @returns {string}
 */
function defaultCard(){
  return "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAFyAfQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9TaKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiih320AFF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bVeoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAokRXTay71b+GiigDnNS8GQXH720k+zN/d/grnbzQdVsfvWzTL/eh+avQpporaNpJWVEX7ztXCeJPH0+xoNNXZ/08Ov8A7LQBivqqw/K3yP8A3Xo/tWL+/XK6leX1zE6/+PvXl/iTwBea3cP5tzcp/sJK6UAe23/iSzsIt1zcx2yf35m2Vy+ofF3Q0byra7+3y/3LT97/AOP/AHa8q0r4G232jzZYvOf/AGvnr0vw98OrawVVWBUoAu6D4wnv7xJJ9MV7T/njM2x2r3Tw3rFprFkv2aPydv3rf+7XnGleG4oV+7W7Zxy6XPFPbfeX+D+9QB6BRVezvFv7dZIvuNVigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKa77F3UI+9aAHUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFNd/4aAHU3en95aZ8qfw72/vPR5395floAlopm9f4fu/+g0+gAooooAKKKKACq95eRWMDSytsX/0KotV1WPTY/78rfdSucfz7+Xz7lt7/wAKfwLQBX1S7n1dt0vyRfwxf3ayn0pXb7tbrIu2m7VoA5ybSlf+Gov7EWT7yrXUeSr0fY6AOfh0RU/grShsFT+GtDyaPJoAz3m+zRO237tY/hLVZdVs3lnbe7Mz/wDAP4Nlb14u9dy/3f46858C6l9j1TU9M+59lumRU3fdX79AHsHhmbbPLA3++tdBXG6bceTqNrJ/Du2NXZUAFFFFABRRRQAUUUUAFFFFABR9z71Nf722mb1T7q/8DoAm3p/epKi87+9FT42/2vl/hoAdRRRQAUUUUAFFFFABRRRQAUUUUAFFFFADX+Rarw3Mv8VWJn2LVf77baAD5narCIqfdoRNi06gAooooAKKKKACiiigAooooAKKKKACiiigAooooAKb/E/+5Tqb9xt1ADEf5f8Axyjfs/vOlDps+79yjZv/ANhKAD7jOv8ABtpyfdWovvSt/tVYoAKKKKACqWq6othD/flb7qU7UtQWwg3f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"
}

/**
 * 开始售卖商品
 */
function goshop() {
  $('#u8').show()
  $('#u7').hide()
  $('#u6').hide()
  $('#u5').hide()
  $('#u4').hide()
  $('#u3').hide()
  $('#u2').hide()
  $('#u1').hide()
  $('#u0').hide()
  $('#u8').get(0).style.top='0px'
   toggleFullScreen()
}

/**
 * 导入Excel
 * @param obj  文件对象
 * @param sql  插入数据sql(插入列需与excel数据列对应)
 */
function importExcel(obj,sql) {
  if(!obj.files) {
    return;
  }
  let wb;
  const f = obj.files[0];
  const reader = new FileReader();
  reader.onload = function(e) {
    const data = e.target.result;
    wb = XLSX.read(data, {
        type: 'binary'
      });
    /**
     * wb.SheetNames[0]是获取Sheets中第一个Sheet的名字
     * wb.Sheets[Sheet名]获取第一个Sheet的数据
     */
    const excelJson = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
    db.transaction(function (tx) {
      for (let i = 0; i < excelJson.length; i++){
        let j = 0;
        const array = [];
        for (const param in excelJson[i]){
          array[j++] = excelJson[i][param];
        }
        tx.executeSql(sql, array, function () {console.info("添加第" + (i + 1) + "条记录成功！")},
            function (tx, result) {console.info("添加第" + (i + 1) + "条记录失败:" + result.message)});
      }
    });
  };
  reader.readAsBinaryString(f);
}

/**
 * 导出Excel
 * @param head  表头列名
 * @param sql  查询数据sql(查询列需与表头列名对应)
 * @param fileName  导出文件名
 */
function exportExcel(head, sql, fileName) {
  const aoa = [];
  aoa[0] = head;
  db.transaction(function (tx) {
    tx.executeSql(sql, [], function (tx, results) {
      for (let i = 0; i < results.rows.length; i++){
        aoa[i + 1] = [];
        let j = 0;
        for (const param in results.rows.item(i)){
          aoa[i + 1][j++] = results.rows.item(i)[param];
        }
      }
      const sheet = XLSX.utils.aoa_to_sheet(aoa);
      openDownloadDialog(sheet2blob(sheet), fileName);
    }, null);
  });

}

/**
 * 将一个sheet转成最终的excel文件的blob对象，然后利用URL.createObjectURL下载
 */
function sheet2blob(sheet, sheetName) {
  sheetName = sheetName || 'sheet1';
  var workbook = {
    SheetNames: [sheetName],
    Sheets: {}
  };
  workbook.Sheets[sheetName] = sheet;
  // 生成excel的配置项
  const woPts = {
    bookType: 'xlsx', // 要生成的文件类型
    bookSST: false, // 是否生成Shared String Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性
    type: 'binary'
  };
  const wbOut = XLSX.write(workbook, woPts);
  const blob = new Blob([s2ab(wbOut)], {type: "application/octet-stream"});
  return blob;
}
/**
 * 字符串转ArrayBuffer
 */
function s2ab(s) {
  const buf = new ArrayBuffer(s.length);
  const view = new Uint8Array(buf);
  for (let i=0; i!=s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
  return buf;
}

/**
 * 通用的打开下载对话框方法，没有测试过具体兼容性
 * @param url 下载地址，也可以是一个blob对象，必选
 * @param saveName 保存文件名，可选
 */
function openDownloadDialog(url, saveName)
{
  if(typeof url == 'object' && url instanceof Blob)
  {
    url = URL.createObjectURL(url); // 创建blob地址
  }
  var aLink = document.createElement('a');
  aLink.href = url;
  aLink.download = saveName || ''; // HTML5新增的属性，指定保存文件名，可以不要后缀，注意，file:///模式下不会生效
  var event;
  if(window.MouseEvent) event = new MouseEvent('click');
  else
  {
    event = document.createEvent('MouseEvents');
    event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
  }
  aLink.dispatchEvent(event);
}
/**
* js小数乘法
*@parameter arg1：被乘数（接受小数和整数）
*@parameter arg2：乘数（接受小数和整数）
*@parameter fix: 乘积保留几位（接受正负整数以及0）
*/
function accMul(arg1,arg2,fix) {
  if(!parseInt(fix)==fix)
  {
    return;
  }
  var m=0,s1=arg1.toString(),s2=arg2.toString();
  try{m+=s1.split(".")[1].length}catch(e){}
  try{m+=s2.split(".")[1].length}catch(e){}
  if(m>fix){
    return (Math.round(Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m-fix))/Math.pow(10,fix));
  }else if(m<=fix){
    return (Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m)).toFixed(fix);
  }else{
    return (arg1*arg2).toFixed(fix);
  }
}