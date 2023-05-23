//页面加载时，执行该方法
$(document).ready(() => {
});

//城市数据
var HeNan = [
    {
        "Option": "郑州市",
        "Value": "ZhengZhou"
    },
    {
        "Option": "开封市",
        "Value": "KaiFeng"
    },
    {
        "Option": "洛阳市",
        "Value": "LuoYang"
    },
    {
        "Option": "平顶山市",
        "Value": "PingDingShan"
    },
    {
        "Option": "安阳市",
        "Value": "AnYang"
    },
    {
        "Option": "鹤壁市",
        "Value": "HeBi"
    },
    {
        "Option": "焦作市",
        "Value": "JiaoZuo"
    },
    {
        "Option": "濮阳市",
        "Value": "PuYang"
    },
    {
        "Option": "许昌市",
        "Value": "XuChang"
    },
    {
        "Option": "漯河市",
        "Value": "LuoHe"
    },
    {
        "Option": "三门峡市",
        "Value": "SanMenXia"
    },
    {
        "Option": "南阳市",
        "Value": "NanYang"
    },
    {
        "Option": "商丘市",
        "Value": "ShangQiu"
    },
    {
        "Option": "信阳市",
        "Value": "XinYang"
    },
    {
        "Option": "周口市",
        "Value": "ZhouKou"
    },
    {
        "Option": "驻马店市",
        "Value": "ZhuMaDian"
    }
];
var HeBei = [
    {
        "Option": "石家庄市",
        "Value": "ShiJiaZhuang"
    },
    {
        "Option": "唐山市",
        "Value": "TangShan"
    },
    {
        "Option": "秦皇岛市",
        "Value": "QinHuangDao"
    },
    {
        "Option": "邯郸市",
        "Value": "HanDan"
    },
    {
        "Option": "邢台市",
        "Value": "XingTai"
    },
    {
        "Option": "保定市",
        "Value": "BaoDing"
    },
    {
        "Option": "张家口市",
        "Value": "ZhangJiaKou"
    },
    {
        "Option": "承德市",
        "Value": "ChengDe"
    },
    {
        "Option": "沧州市",
        "Value": "CangZhou"
    },
    {
        "Option": "廊坊市",
        "Value": "LangFang"
    },
    {
        "Option": "衡水市",
        "Value": "HengShui"
    }
];
var HuNan = [
    {
        "Option": "长沙市",
        "Value": "ChangSha"
    },
    {
        "Option": "衡阳市",
        "Value": "HengYang"
    },
    {
        "Option": "邵阳市",
        "Value": "ShaoYang"
    },
    {
        "Option": "永州市",
        "Value": "YongZhou"
    },
    {
        "Option": "常德市",
        "Value": "ChangDe"
    },
    {
        "Option": "岳阳市",
        "Value": "YueYang"
    },
    {
        "Option": "郴州市",
        "Value": "BingZhou"
    },
    {
        "Option": "怀化市",
        "Value": "HuaiHua"
    },
    {
        "Option": "株洲市",
        "Value": "ZhuZhou"
    },
    {
        "Option": "益阳市",
        "Value": "YiYang"
    }

];
var HuBei = [
    {
        "Option": "武汉市",
        "Value": "WuHan"
    },
    {
        "Option": "黄石市",
        "Value": "HuangShi"
    },
    {
        "Option": "十堰市",
        "Value": "ShiYan"
    },
    {
        "Option": "荆州市",
        "Value": "JinZhou"
    },
    {
        "Option": "宜昌市",
        "Value": "YiChang"
    },
    {
        "Option": "襄阳市",
        "Value": "XiangYang"
    },
    {
        "Option": "鄂州市",
        "Value": "EZhou"
    },
    {
        "Option": "荆门市",
        "Value": "JinMen"
    },
    {
        "Option": "孝感市",
        "Value": "XiaoGan"
    },
    {
        "Option": "黄冈市",
        "Value": "HuangGang"
    },
    {
        "Option": "咸宁市",
        "Value": "XianNing"
    },
    {
        "Option": "随州市",
        "Value": "SuiZhou"
    }
];
var GuangDong = [
    {
        "Option": "深圳市",
        "Value": "ShenZhen"
    },
    {
        "Option": "广州市",
        "Value": "GuangZhou"
    },
    {
        "Option": "珠海市",
        "Value": "ZhuHai"
    },
    {
        "Option": "东莞市",
        "Value": "DongGuan"
    },
    {
        "Option": "佛山市",
        "Value": "FoShan"
    },
    {
        "Option": "中山市",
        "Value": "ZhongShan"
    },
    {
        "Option": "惠州市",
        "Value": "HuiZhou"
    },
    {
        "Option": "汕头市",
        "Value": "ShanTou"
    },
    {
        "Option": "江门市",
        "Value": "JiangMen"
    },
    {
        "Option": "湛江市",
        "Value": "ZhanJiang"
    },
    {
        "Option": "肇庆市",
        "Value": "ZhaoQing"
    },
    {
        "Option": "梅州市",
        "Value": "MeiZhou"
    },
    {
        "Option": "茂名市",
        "Value": "MaoMing"
    },
    {
        "Option": "阳江市",
        "Value": "YangJiang"
    },
    {
        "Option": "清远市",
        "Value": "QingYuan"
    },
    {
        "Option": "韶关市",
        "Value": "ShaoGuan"
    },
    {
        "Option": "揭阳市",
        "Value": "JieYang"
    },
    {
        "Option": "汕尾市",
        "Value": "ShanWei"
    },
    {
        "Option": "潮州市",
        "Value": "ChaoZhou"
    },
    {
        "Option": "河源市",
        "Value": "HeYuan"
    },
    {
        "Option": "云浮市",
        "Value": "YunFu"
    }

];
var BeiJing = [
    {
        "Option": "东城区",
        "Value": "BeiJing-DongCheng"
    },
    {
        "Option": "西城区",
        "Value": "BeiJing-XiCheng"
    },
    {
        "Option": "崇文区",
        "Value": "BeiJing-ChongWen"
    },
    {
        "Option": "宣武区",
        "Value": "BeiJing-XuanWu"
    },
    {
        "Option": "朝阳区",
        "Value": "BeiJing-ChaoYang"
    },
    {
        "Option": "丰台区",
        "Value": "BeiJing-FengTai"
    },
    {
        "Option": "石景山区",
        "Value": "BeiJing-ShiJingShan"
    },
    {
        "Option": "海淀区",
        "Value": "BeiJing-HaiDian"
    }
];
var ShangHai = [
    {
        "Option": "黄浦区",
        "Value": "ShangHai-HuangPu"
    },
    {
        "Option": "徐汇区",
        "Value": "ShangHai-XuHui"
    },
    {
        "Option": "长宁区",
        "Value": "ShangHai-ChangNing"
    },
    {
        "Option": "静安区",
        "Value": "ShangHai-JingAn"
    },
    {
        "Option": "普陀区",
        "Value": "ShangHai-PuTuo"
    },
    {
        "Option": "虹口区",
        "Value": "ShangHai-HongKou"
    },
    {
        "Option": "杨浦区",
        "Value": "ShangHai-YangPu"
    },
    {
        "Option": "浦东新区",
        "Value": "ShangHai-PuDong"
    },
    {
        "Option": "闵行区",
        "Value": "ShangHai-MinXing"
    },
    {
        "Option": "宝山区",
        "Value": "ShangHai-BaoShan"
    },
    {
        "Option": "嘉定区",
        "Value": "ShangHai-JiaDing"
    },
    {
        "Option": "金山区",
        "Value": "ShangHai-JinShan"
    },
    {
        "Option": "松江区",
        "Value": "ShangHai-SongJiang"
    },
    {
        "Option": "青浦区",
        "Value": "ShangHai-QingPu"
    },
    {
        "Option": "奉贤区",
        "Value": "ShangHai-FengXian"
    },
    {
        "Option": "崇明区",
        "Value": "ShangHai-ChongMing"
    }
];


//当滑动条改动时，触发该事件
function changered() {
    var red = $('#colorRed').val();
    var green = $('#colorGreen').val();
    var blue = $('#colorBlue').val();
    $('#red').text(red);
    $('#green').text(green);
    $('#blue').text(blue);
    //将rgb数值转为十六进制
    var color = '#' + parseInt(red).toString(16) + parseInt(green).toString(16) + parseInt(blue).toString(16);
    //设置标题样式
    $('#title').css("color", color);
}

//当省份选择框变动时，触发该事件
$("#ShengFen").change(() => {
    var shengfen = $("#ShengFen").val().trim();
    var ChengShi = $("#ChengShi");
    switch (shengfen) {
        case "HeNan":
            ChengShi.html("<option value=''>- 城市 -</option>");
            HeNan.forEach(element => {
                ChengShi.append("<option value='" + element.Value + "'>" + element.Option + "</option>");
                console.log("<option value='" + element.Value + "'>" + element.Option + "</option>");
            });
            break;
        case "HeBei":
            ChengShi.html("<option value=''>- 城市 -</option>");
            HeBei.forEach(element => {
                ChengShi.append("<option value='" + element.Value + "'>" + element.Option + "</option>");
            });
            break;
        case "HuNan":
            ChengShi.html("<option value=''>- 城市 -</option>");
            HuNan.forEach(element => {
                ChengShi.append("<option value='" + element.Value + "'>" + element.Option + "</option>");
            });
            break;
        case "HuBei":
            ChengShi.html("<option value=''>- 城市 -</option>");
            HuBei.forEach(element => {
                ChengShi.append("<option value='" + element.Value + "'>" + element.Option + "</option>");
            });
            break;
        case "GuangDong":
            ChengShi.html("<option value=''>- 城市 -</option>");
            GuangDong.forEach(element => {
                ChengShi.append("<option value='" + element.Value + "'>" + element.Option + "</option>");
            });
            break;
        case "BeiJing":
            ChengShi.html("<option value=''>- 城市 -</option>");
            BeiJing.forEach(element => {
                ChengShi.append("<option value='" + element.Value + "'>" + element.Option + "</option>");
            });
            break;
        case "ShangHai":
            ChengShi.html("<option value=''>- 城市 -</option>");
            ShangHai.forEach(element => {
                ChengShi.append("<option value='" + element.Value + "'>" + element.Option + "</option>");
            });
            break;
        default:
            ChengShi.html("<option value=''>- 城市 -</option>");
            break;
    }
});



function btn_register() {
    var user_data = new Object();
    user_data.username = $("#username").val();
    user_data.password = $("#password").val();
    user_data.email = $("#email").val();
    user_data.place = $("#place").val();
    user_data.phone = $("#phone").val();
    user_data.shengfen = $("#ShengFen").val();
    user_data.chengshi = $("#ChengShi").val();
    user_data.email_id = $("#email_id").val();
    localStorage.setItem("userdata", JSON.stringify(user_data));
    window.location.href = "./login.html";
}

function btn_login() {
    window.location.href = "./login.html";
}


