/*
 * @Author: tao 
 * @Date: 2018-12-10 19:08:28 
 * @Last Modified by:   tao 
 * @Last Modified time: 2018-12-10 19:08:28 
 * @func 封装好的ajax请求；
 */

function stringify(obj){
    var str = '';
    if(!obj){
        return str;
    }
    for(var i in obj){
        str += '&'+i+'='+obj[i];
    }
    return str.slice(1);
}
var request = {
    createAjax:function(){
        return new XMLHttpRequest();
    },
    get:function(url,params,fn){
        if(typeof params === 'function'){
            fn = params;
            params = '';
        }
        if(params){
            url = url + '?' + (stringify(params)); 
        }
        var oAjax = this.createAjax();
        oAjax.open('GET',url,true);
        oAjax.send();
        oAjax.onreadystatechange = function(){
            if(this.status === 200 && this.readyState === 4){
                fn && fn(this.responseText);
            }
        }
    },
    post:function(url,body,fn){
        if(typeof body === 'function'){
            fn = body;
            body = '';
        }
        var oAjax = this.createAjax();
        oAjax.open('POST',url,true);
        oAjax.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        oAjax.send(stringify(body));
        oAjax.onreadystatechange = function(){
            if(this.status === 200 && this.readyState === 4){
                fn && fn(this.responseText);
            }
        }
    }
}