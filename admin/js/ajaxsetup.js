$(function(){

//这里写$.ajaxSetup();
$.ajaxSetup({
    //发送请求前运行的函数。
    beforeSend:function(xhr){
        //发送token令牌. 
        xhr.setRequestHeader('Authorization',window.localStorage.getItem('token'));
    },
    //如果请求失败要运行的函数
    error:function(xhr,status,error){
        console.log(error);
        //如果报了这样一个错误,说明你是通过网址直接请求的,你并没有登录
        if(error == 'Forbidden'){
            alert('请登录');
            window.location.href = './login.html';
        }
    }
})
})