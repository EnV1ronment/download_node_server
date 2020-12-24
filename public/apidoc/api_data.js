define({ "api": [
  {
    "type": "get",
    "url": "/login/verify-code",
    "title": "02获取验证码",
    "version": "0.0.1",
    "group": "Login",
    "description": "<p>登录页面-获取验证码</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "action",
            "description": "<p>执行了什么操作 forgetPassword/register/changePhone</p>"
          }
        ]
      }
    },
    "filename": "src/routes/login/login.ts",
    "groupTitle": "登录",
    "name": "GetLoginVerifyCode",
    "sampleRequest": [
      {
        "url": "http://localhost:8081/login/verify-code"
      }
    ]
  },
  {
    "type": "post",
    "url": "/login",
    "title": "06登录",
    "version": "0.0.1",
    "group": "Login",
    "description": "<p>登录页面-登录</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "filename": "src/routes/login/login.ts",
    "groupTitle": "登录",
    "name": "PostLogin",
    "sampleRequest": [
      {
        "url": "http://localhost:8081/login"
      }
    ]
  },
  {
    "type": "post",
    "url": "/login/forget-password",
    "title": "05忘记密码",
    "version": "0.0.1",
    "group": "Login",
    "description": "<p>登录页面-忘记密码</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "verifyCode",
            "description": "<p>验证码</p>"
          }
        ]
      }
    },
    "filename": "src/routes/login/login.ts",
    "groupTitle": "登录",
    "name": "PostLoginForgetPassword",
    "sampleRequest": [
      {
        "url": "http://localhost:8081/login/forget-password"
      }
    ]
  },
  {
    "type": "post",
    "url": "/login/register",
    "title": "03注册",
    "version": "0.0.1",
    "group": "Login",
    "description": "<p>登录页面-注册</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": "<p>账号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "confirmPassword",
            "description": "<p>确认密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "verifyCode",
            "description": "<p>验证码</p>"
          }
        ]
      }
    },
    "filename": "src/routes/login/login.ts",
    "groupTitle": "登录",
    "name": "PostLoginRegister",
    "sampleRequest": [
      {
        "url": "http://localhost:8081/login/register"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/station",
    "title": "删除电站",
    "version": "0.0.1",
    "group": "Station",
    "description": "<p>电站页面-删除电站</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access-token",
            "description": "<p>用户Token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "station-id",
            "description": "<p>当前电站ID</p>"
          }
        ]
      }
    },
    "filename": "src/routes/station/station.ts",
    "groupTitle": "电站模块",
    "name": "DeleteStation",
    "sampleRequest": [
      {
        "url": "http://localhost:8081/station"
      }
    ]
  },
  {
    "type": "get",
    "url": "/station",
    "title": "获取电站",
    "version": "0.0.1",
    "group": "Station",
    "description": "<p>电站页面-获取电站</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access-token",
            "description": "<p>用户Token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "firm-id",
            "description": "<p>当前单位ID</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>用户ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>电站ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "establishTime",
            "description": "<p>投产时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "pvCapacity",
            "description": "<p>光伏容量</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "batteryCapacity",
            "description": "<p>电池容量</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "installer",
            "description": "<p>运营商</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "inverterSN",
            "description": "<p>设备SN号</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "deviceId",
            "description": "<p>设备ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   results: [{\n  name: 'White House',\n  location: 'No.1378 WuShan Avenue, ShangHai City, China.',\n  status: 1, // On Line\n  imageUrl: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1700318080,177211565&fm=26&gp=0.jpg',\n  siteInfo: [\n      {\n          title: 'Establish Time',\n          value: 'Thursday, 29, January 2020',\n      },\n      {\n          title: 'PV Capacity',\n          value: '99.18kW',\n      },\n      {\n          title: 'Battery Capacity',\n          value: '5kW/14kWh',\n      },\n      {\n          title: 'Operator',\n          value: 'Wanke',\n      },\n      {\n          title: 'Device SN',\n          value: '144474474126945945',\n      },\n  ],\n  rates: [\n      {\n          title: 'Peak Rate',\n          value: '$0.42 / kWh',\n      },\n      {\n          title: 'Shoulder Rate',\n          value: '$1.54 / kWh',\n      },\n      {\n          title: 'Off-peak Rate',\n          value: '$0.97 / kWh',\n      },\n      {\n          title: 'Feed-in Rate',\n          value: '$0.39 / kWh',\n      },\n  ],\n   },...],\n   errorCode: 0,\n   errorMsg: ''\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/station/station.ts",
    "groupTitle": "电站模块",
    "name": "GetStation",
    "sampleRequest": [
      {
        "url": "http://localhost:8081/station"
      }
    ]
  },
  {
    "type": "patch",
    "url": "/station",
    "title": "修改电站信息",
    "version": "0.0.1",
    "group": "Station",
    "description": "<p>电站页面-修改电站</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access-token",
            "description": "<p>用户Token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "station-id",
            "description": "<p>当前电站ID</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": "<p>电站标题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "longitude",
            "description": "<p>经度</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "latitude",
            "description": "<p>纬度</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "address",
            "description": "<p>地址</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   errorCode: 0,\n   errorMsg: ''\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/station/station.ts",
    "groupTitle": "电站模块",
    "name": "PatchStation",
    "sampleRequest": [
      {
        "url": "http://localhost:8081/station"
      }
    ]
  },
  {
    "type": "post",
    "url": "/station",
    "title": "新增电站",
    "version": "0.0.1",
    "group": "Station",
    "description": "<p>电站页面-新增电站</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access-token",
            "description": "<p>用户Token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "firm-id",
            "description": "<p>当前单位ID</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>电站标题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deviceSN",
            "description": "<p>设备SN码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>地址</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "longitude",
            "description": "<p>精度</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "latitude",
            "description": "<p>纬度</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   errorCode: 0,\n   errorMsg: ''\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/station/station.ts",
    "groupTitle": "电站模块",
    "name": "PostStation",
    "sampleRequest": [
      {
        "url": "http://localhost:8081/station"
      }
    ]
  },
  {
    "type": "put",
    "url": "/station/deviceSN",
    "title": "修改设备SN号",
    "version": "0.0.1",
    "group": "Station",
    "description": "<p>电站页面-修改设备SN号</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access-token",
            "description": "<p>用户Token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "station-id",
            "description": "<p>当前电站ID</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deviceSN",
            "description": "<p>新的设备SN码</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   errorCode: 0,\n   errorMsg: ''\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/station/station.ts",
    "groupTitle": "电站模块",
    "name": "PutStationDevicesn",
    "sampleRequest": [
      {
        "url": "http://localhost:8081/station/deviceSN"
      }
    ]
  },
  {
    "type": "get",
    "url": "/statistics/electricity",
    "title": "电量对比图",
    "version": "0.0.1",
    "group": "Statistics",
    "description": "<p>statistics页面-电量对比图</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access-token",
            "description": "<p>用户Token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "firm-id",
            "description": "<p>当前单位ID</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "station-id",
            "description": "<p>当前电站ID</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dateTime",
            "description": "<p>时间 根据时间类型传递，day就传YYYY-MM-DD格式，lifeTime时不用传</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "timeType",
            "description": "<p>时间类型 day/month/year/lifeTime</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "generator",
            "description": "<p>光伏发电量</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "consumption",
            "description": "<p>用电量</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "feedIn",
            "description": "<p>日发电上网量</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "results",
            "description": "<p>图表数据统一结构</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   results: {\n     results: {\n       xData: ['00:00:00', '01:00:00',...],\n       yData: [[], [], [], []]\n     },\n     generator: 100,\n     consumption: 80,\n     feedIn: 20\n   },\n   errorCode: 0,\n   errorMsg: ''\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/statistics/statistics.ts",
    "groupTitle": "统计数据",
    "name": "GetStatisticsElectricity",
    "sampleRequest": [
      {
        "url": "http://localhost:8081/statistics/electricity"
      }
    ]
  },
  {
    "type": "get",
    "url": "/statistics/profit",
    "title": "电费收益对比图",
    "version": "0.0.1",
    "group": "Statistics",
    "description": "<p>statistics页面-电费收益对比图</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access-token",
            "description": "<p>用户Token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "firm-id",
            "description": "<p>当前单位ID</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "station-id",
            "description": "<p>当前电站ID</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dateTime",
            "description": "<p>时间 根据时间类型传递，day就传YYYY-MM-DD格式，lifeTime时不用传</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "timeType",
            "description": "<p>时间类型 day/month/year/lifeTime</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "electricityFee",
            "description": "<p>电费</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "profit",
            "description": "<p>收益</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "results",
            "description": "<p>图表数据统一结构</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   results: {\n     xData: ['00:00:00', '01:00:00',...],\n     yData: [[], []]\n     electricityFee: 100,\n     profit: 80\n   },\n   errorCode: 0,\n   errorMsg: ''\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/statistics/statistics.ts",
    "groupTitle": "统计数据",
    "name": "GetStatisticsProfit",
    "sampleRequest": [
      {
        "url": "http://localhost:8081/statistics/profit"
      }
    ]
  },
  {
    "type": "get",
    "url": "/status/energy-flow",
    "title": "能量流动",
    "version": "0.0.1",
    "group": "Status",
    "description": "<p>status页面-能量流动</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access-token",
            "description": "<p>用户Token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "firm-id",
            "description": "<p>当前单位ID</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "station-id",
            "description": "<p>当前电站ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   results: {\n     battery: {\n       power: 0,\n       toGrid: 0,\n       toLoad: 0\n     },\n     pv: {\n       power: 0,\n       toGrid: 0,\n       toLoad: 0,\n       toBattery: 0\n     },\n     grid: {\n       power: 0,\n       toBattery: 0\n     },\n     load: {\n       power: 0\n     }\n   },\n   errorCode: 0,\n   errorMsg: ''\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/status/status.ts",
    "groupTitle": "实时状态",
    "name": "GetStatusEnergyFlow",
    "sampleRequest": [
      {
        "url": "http://localhost:8081/status/energy-flow"
      }
    ]
  },
  {
    "type": "get",
    "url": "/status/summary",
    "title": "电站汇总数据",
    "version": "0.0.1",
    "group": "Status",
    "description": "<p>status页面-电站汇总数据</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access-token",
            "description": "<p>用户Token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "firm-id",
            "description": "<p>当前单位ID</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "station-id",
            "description": "<p>当前电站ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "SOC",
            "description": "<p>电池SOC</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "generation",
            "description": "<p>光伏日发电量</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "consumption",
            "description": "<p>日用电量</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "feedIn",
            "description": "<p>日发电上网电量</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "electricityFee",
            "description": "<p>日电费</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "profit",
            "description": "<p>日收益</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   results: {\n     SOC: 98,\n     generation: 100\n     consumption: 80,\n     feedIn: 100,\n     electricityFee: 80,\n     profit: 100\n   },\n   errorCode: 0,\n   errorMsg: ''\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes/status/status.ts",
    "groupTitle": "实时状态",
    "name": "GetStatusSummary",
    "sampleRequest": [
      {
        "url": "http://localhost:8081/status/summary"
      }
    ]
  }
] });
