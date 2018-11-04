$(function(){
    $('#UserName').focus(function () {
        this.value = (this.value=='输入你的账号')?'': this.value;
    });
    $('#passWord').focus(function (){
        this.value = (this.value=='******')?'': this.value;
    });
});






