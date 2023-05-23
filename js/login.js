$(document).ready(() => {
});

var code = 99999999;

//获取验证码
function getCode() {
    var codebtn = $("#CodeButton");
    var time = 10;
    code = Math.random() * 1000000;
    code = parseInt(code).toString();
    if (code.length < 6) {
        for (var k = 6 - code.length; k > 0; k--) {
            code = code + '0';
        }
    }
    else if (code.length > 6) {
        code = code.subString(0, 5);
    }

    alert("验证码为:  " + code);

    codebtn.removeClass("btn-outline-info");
    codebtn.addClass("active btn-outline-secondary");
    codebtn.attr("disabled", 'disabled');

    const timer = setInterval(function () {
        time = time - 1;
        codebtn.text(time + " 秒后重试");

        if (time === 0) {
            clearInterval(timer);
            codebtn.addClass("btn-outline-info");
            codebtn.removeClass("active btn-outline-secondary");
            codebtn.removeAttr("disabled");
            codebtn.text("获取验证码")
        }
    }, 1000);
}

function btn_login() {
    var login_username = $("#username").val();
    var login_password = $("#password").val();
    var login_code = $("#code").val();
    var userdata = JSON.parse(localStorage.getItem("userdata"));
    var register_username = userdata.username;
    var register_password = userdata.password;

    if (register_username === "" || register_password === "") {
        alert("暂无用户信息，请前往注册");
    } else if (login_username != register_username || login_password != register_password) {
        alert("用户名或密码错误，请重试");
    } else if (login_code != code) {
        alert("验证码错误，请重试");
        $("#code").val("");
    } else {
        alert("登录成功");
        window.location.href = "./shopping-index.html";
    }
}

function btn_register() {
    window.location.href = "./register.html";
}
