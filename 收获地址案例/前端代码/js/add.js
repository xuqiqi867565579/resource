

function AddRessPage(){
    this.init();
}
AddRessPage.prototype.init = function(){ //初始化
    this.concats = '';//联系人
    this.tel = ''; // 电话
    this.address = ''; //地址
    this.area = ''; // 门牌号
    this.index = 0; // 性别
    this.aSexSpan = document.querySelectorAll('.sex span'); // 选择性别的span
    this.inputs = document.querySelectorAll('li input'); // 所有的输入框
    this.btn = document.querySelector('.btn'); //确定按钮
    this.del = document.querySelector('#del'); // 删除按钮
    this.title = document.querySelector('#title'); //标题按钮
    for(var i = 0; i < this.aSexSpan.length; i++){ // 切换性别的点击事件
        this.aSexSpan[i].index = i;
        this.aSexSpan[i].onclick = this.handleClick.bind(this);
    }
    for(var j = 0; j < this.inputs.length; j++){ // input事件
        this.inputs[j].oninput = this.handleInput.bind(this);
    }
    this.btn.onclick = this.btnClick.bind(this);
    this.del.onclick = this.delClick.bind(this);
    this.urlPage(); //处理编辑页面和添加页面
}
AddRessPage.prototype.qsParse = function(str){
    var obj = {};
    var arr = str.split('&');
    arr.forEach(function(item){
        var arr = item.split('=');
        obj[arr[0]] = arr[1];
    });
    return obj;
}
AddRessPage.prototype.urlPage = function(){
    var url = location.href;
    var index = url.indexOf('?');
    url = url.slice(index+1);
    var oUrl = this.qsParse(url);
    if(oUrl.page === 'add'){//添加页面

        // 隐藏删除按钮
        this.del.innerHTML = '';
        // 切换title
        this.title.innerHTML = '添加地址'
        return;
    }
    if(oUrl.page === 'edit'){// 编辑页面
        // 显示删除按钮
        this.del.innerHTML = '删除';
        // 切换title
        this.title.innerHTML = '编辑地址';
        // 初始化信息
        for(var i in oUrl){
            if(i === 'page'){continue}
            this[i] = window.decodeURI(oUrl[i]);
        }
        this.viewShow();
        return;
    }
    location.href = 'index.html';
}
AddRessPage.prototype.getIndex = function(){
    return this.index;
}
AddRessPage.prototype.handleClick = function(ev){
    var that = ev.target;
    this.aSexSpan[this.index].className = '';
    this.aSexSpan[that.index].className = 'active';
    this.index = that.index;
}
AddRessPage.prototype.handleInput = function(ev){
    this[ev.target.dataset.prop] = ev.target.value;
}
AddRessPage.prototype.viewShow = function(){
    for(var j = 0; j < this.aSexSpan.length; j++){
        this.aSexSpan[j].className = '';
    }
    for(var i = 0; i < this.inputs.length; i++){
        var item = this.inputs[i];
        item.value = this[item.dataset.prop];
    }
    this.aSexSpan[this.index].className = 'active';
}
AddRessPage.prototype.delClick = function(){
    // 点击删除按钮，删除一个地址，请在这里补全代码
    alert('删除该条信息');

}
AddRessPage.prototype.btnClick = function(){ // 点击确定按钮
    var concats = this.concats; //联系人
    var tel = this.tel; // 电话
    var address = this.address; //地址
    var area = this.area; // 门牌号
    var index = this.index; // 性别
    console.log(concats,tel,address,area,index);
    this.request();
}
AddRessPage.prototype.request = function(){
    // 在这里自行调用ajax请求与后台进行交互
}

var page = new AddRessPage();