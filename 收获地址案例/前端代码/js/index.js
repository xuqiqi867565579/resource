// 模拟地址数据

var  addressData = [
    {
        concats:'赵小六',
        tel:'13423457890',
        address:'雨欣家园',
        area:'8号楼401室',
        index:0
    },
    {
        concats:'张三',
        tel:'13423457890',
        address:'龙湖小区',
        area:'8号楼401室',
        index:0
    },
    {
        concats:'李四',
        tel:'13423457890',
        address:'龙湖小区',
        area:'8号楼401室',
        index:1
    },
    {
        concats:'王五',
        tel:'13423457890',
        address:'龙湖小区',
        area:'8号楼401室',
        index:0
    }
]


function IndexList(){
    this.init();
}

IndexList.prototype.init = function(){
    this.request(); //请求数据并加载
    this.oSection.onclick = this.editHandleClick.bind(this);
}
IndexList.prototype.qsString = function(obj){
    var str = '';
    for(var i in obj){
        str += '&'+i+'='+window.encodeURI(obj[i]);
    }
    return str.slice(1);
}
IndexList.prototype.editHandleClick = function(ev){ //点击编辑按钮
    if(ev.target.className === 'edit'){
        let index = parseInt(ev.target.dataset.index);
        let str = this.qsString(this.addressData[index]);
        // 页面跳转
        location.href = 'add.html?page=edit&'+str;
    }
    
}
IndexList.prototype.load = function(){
    this.oSection = document.querySelector('section');
    for(var i = 0; i < this.addressData.length; i++){
        var item = this.addressData[i];
        this.oSection.firstElementChild.innerHTML += `<li>
                <h3>${item.address}</h3>
                <p>${item.area}</p>
                <i class="tel">${item.concats}(${item.index === 0 ? '先生' : '女士'}) ${item.tel}</i>
                <i data-index="${i}" class="edit">编辑</i>
            </li>`
    }
}

IndexList.prototype.request = function(){
    // 自行请求自己编写的接口，获取真实的数据

    this.addressData = addressData; // 这是模拟的数据；
    this.load();
}

var indexList = new IndexList();