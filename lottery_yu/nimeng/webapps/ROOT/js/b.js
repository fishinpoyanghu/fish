/**
 * 校验js
 */
var requestUrl = "http://122.194.113.205/LemonHeart";
var passwordRE = /^((?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z~!@#$%^&*.]|[0-9 | A-Z | a-z]){6,18}$/;
var emailRE = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
var mobileRE = /^0?(13[0-9]|15[0-9]|18[0-9]|14[57]|17[0678])[0-9]{8}$/;
var isIDCardRE = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
var codeRE = /^[0-9]\d{5}$/;
var bankCodeRE = /^(\d{16}|\d{19})$/;
var posCodeRE = /^(\d{15})$/;//  ^[0-9]{15}$;
var floatNumRE =/^[0-9]+.?[0-9]*$/;///^[\+\-]?\d*?\.?\d*?$/;
var ingeterNumRE = /^[1-9]+[0-9]*]*$/;///^[\+\-]?\d*?$/;

function RegMoney(money){
	return floatNumRE.test(money);
}
function RegInteger(num){
	return ingeterNumRE.test(num);
}
function RegPwd(password) {
	return passwordRE.test(password);
}

function RegEmail(email) {
	return emailRE.test(email);
}

function RegMobile(mobile) {
	return mobileRE.test(mobile);
}

function RegCard(cardNumber) {
	return isIDCardRE.test(cardNumber);
}

function RegCode(code) {
	return codeRE.test(code);
}

function RegBankCode(bankCode) {
	return bankCodeRE.test(bankCode);
}
function RegPosCode(code) {
	return posCodeRE.test(code);
}

var Wi = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1 ];// 加权因子
var ValideCode = [ 1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2 ];// 身份证验证位值.10代表X
function IdCardValidate(idCard) {
	// idCard = idCard.toString().trim();
	if (idCard.length == 15) {
		return isValidityBrithBy15IdCard(idCard);
	} else if (idCard.length == 18) {
		var a_idCard = idCard.split("");// 得到身份证数组
		if (isValidityBrithBy18IdCard(idCard) && isTrueValidateCodeBy18IdCard(a_idCard)) {
			return true;
		} else {
			return false;
		}
	} else {
		return false;
	}
}

function isValidityBrithBy18IdCard(idCard18) {
	var year = idCard18.substring(6, 10);
	var month = idCard18.substring(10, 12);
	var day = idCard18.substring(12, 14);
	var temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day));
	// 这里用getFullYear()获取年份，避免千年虫问题
	if (temp_date.getFullYear() != parseFloat(year) || temp_date.getMonth() != parseFloat(month) - 1 || temp_date.getDate() != parseFloat(day)) {
		return false;
	} else {
		return true;
	}
}
function isValidityBrithBy15IdCard(idCard15) {
	var year = idCard15.substring(6, 8);
	var month = idCard15.substring(8, 10);
	var day = idCard15.substring(10, 12);
	var temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day));
	// 对于老身份证中的你年龄则不需考虑千年虫问题而使用getYear()方法
	if (temp_date.getYear() != parseFloat(year) || temp_date.getMonth() != parseFloat(month) - 1 || temp_date.getDate() != parseFloat(day)) {
		return false;
	} else {
		return true;
	}
}

function isTrueValidateCodeBy18IdCard(a_idCard) {
	var sum = 0; // 声明加权求和变量
	if (a_idCard[17].toLowerCase() == 'x') {
		a_idCard[17] = 10;// 将最后位为x的验证码替换为10方便后续操作
	}
	for (var i = 0; i < 17; i++) {
		sum += Wi[i] * a_idCard[i];// 加权求和
	}
	valCodePosition = sum % 11;// 得到验证码所位置
	if (a_idCard[17] == ValideCode[valCodePosition]) {
		return true;
	} else {
		return false;
	}
}
// input只能输入数字
function IsNum(e) {
	var k = window.event ? e.keyCode : e.which;
	if (((k >= 48) && (k <= 57)) || k == 8 || k == 0) {
	} else {
		if (window.event) {
			window.event.returnValue = false;
		} else {
			e.preventDefault(); // for firefox
		}
	}
}

function isEmpty(value){
    return $.trim(value)==''||typeof (value) == "undefined";
}

//校验  20160310
var realNameRE = /^[\u0391-\uFFE5\w]+$/;
// update by guoxinzhao
function RegRealName(realName) {
	if (realName.indexOf(" ") != -1) {
		return false;
	}
	if (realName.length > 20) {
		return false
	}
	// return realNameRE.test(realName);
	return true;
}

function isUnsignedInteger(cardNo) {
	return reg.test(cardNo);
}

function PassportNum(passportNum) {
	return PassportNumRE.test(passportNum);
}

String.prototype.trim = function() {
	return this.replace(/(^\s*)|(\s*$)/g, "");
}
function getStringLength(str){  
	var cArr = str.match(/[\u4e00-\u9fa5]/g);   
	return str.length + (cArr == null ? 0 : cArr.length);  

//	var l = 0; 
//	var a = s.split(""); 
//	for (var i=0;i<a.length;i++){  
//		if (a[i].charCodeAt(0)<299){
//			l++;  
//		} else {   
//			l+=2;  
//		} 
//	} return l;
}
//数值千分位
function format (num) {
	return (num + '').replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
}

 Date.prototype.format = function (format) {
        var o = {
            "M+": this.getMonth() + 1, //month
            "d+": this.getDate(),    //day
            "h+": this.getHours(),   //hour
            "m+": this.getMinutes(), //minute
            "s+": this.getSeconds(), //second
            "q+": Math.floor((this.getMonth() + 3) / 3),  //quarter
            "S": this.getMilliseconds() //millisecond
        }
        if (/(y+)/.test(format)) format = format.replace(RegExp.$1,
            (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)if (new RegExp("(" + k + ")").test(format))
            format = format.replace(RegExp.$1,
                RegExp.$1.length == 1 ? o[k] :
                    ("00" + o[k]).substr(("" + o[k]).length));
        return format;
    }
	

/* 
 * 处理过长的字符串，截取并添加省略号 
 * 注：半角长度为1，全角长度为2 
 *  
 * pStr:字符串 
 * pLen:截取长度 
 *  
 * return: 截取后的字符串 
 */  
function autoAddEllipsis(pStr, pLen) {  
    if(typeof(pStr)=="undefined" || pStr==""){
	 return ""; 
	}
    var _ret = cutString(pStr, pLen);  
    var _cutFlag = _ret.cutflag;  
    var _cutStringn = _ret.cutstring;  
  
    if ("1" == _cutFlag) {  
        return _cutStringn + "...";  
    } else {  
        return _cutStringn;  
    }  
}  
  
/* 
 * 取得指定长度的字符串 
 * 注：半角长度为1，全角长度为2 
 *  
 * pStr:字符串 
 * pLen:截取长度 
 *  
 * return: 截取后的字符串 
 */  
function  cutString(pStr, pLen) {  
  
    // 原字符串长度  
    var _strLen = pStr.length;  
  
    var _tmpCode;  
  
    var _cutString;  
  
    // 默认情况下，返回的字符串是原字符串的一部分  
    var _cutFlag = "1";  
  
    var _lenCount = 0;  
  
    var _ret = false;  
  
    if (_strLen <= pLen/2) {  
        _cutString = pStr;  
        _ret = true;  
    }  
  
    if (!_ret) {  
        for (var i = 0; i < _strLen ; i++ ) {  
            if (isFull(pStr.charAt(i))) {  
                _lenCount += 2;  
            } else {  
                _lenCount += 1;  
            }  
  
            if (_lenCount > pLen) {  
                _cutString = pStr.substring(0, i);  
                _ret = true;  
                break;  
            } else if (_lenCount == pLen) {  
                _cutString = pStr.substring(0, i + 1);  
                _ret = true;  
                break;  
            }  
        }  
    }  
      
    if (!_ret) {  
        _cutString = pStr;  
        _ret = true;  
    }  
  
    if (_cutString.length == _strLen) {  
        _cutFlag = "0";  
    }  
  
    return {"cutstring":_cutString, "cutflag":_cutFlag};  
}  
  
/* 
 * 判断是否为全角 
 *  
 * pChar:长度为1的字符串 
 * return: true:全角 
 *          false:半角 
 */  
function isFull (pChar) {  
    if ((pChar.charCodeAt(0) > 128)) {  
        return true;  
    } else {  
        return false;  
    }  
}  