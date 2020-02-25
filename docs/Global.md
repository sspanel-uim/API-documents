# Global

## getGlobalConfig

### 获取全局设置

| 路由 | method | cookie |
| :--- | :--- | :--- |
| /globalconfig | GET | include |

| 返回参数 | type | 说明 |
| :--- | :--- | :--- |
| ret | Number | 请求返回类型 1: 成功 \| 0: 失败 \| other: 其他 |
| globalConfig | [Object](/Global.html#globalconfig) | 网站全局设置 |

## Object 属性

#### globalConfig

| 属性 | type | 说明 |
| :--- | :--- | :--- |
| geetest_html | [Object](/Global.html#geetest-html) | 用于判断 geetest 是否开启 |
| login_token | Text | 用于 Telegram 二维码登录 (似乎已废弃) |
| login_number | Number | 用于 Telegram 的 PIN 码登录 (似乎已废弃) |
| telegram_bot | Text | Telegram 机器人账号 |
| enable_logincaptcha | Boolean | 判断是否开启登录验证码 |
| enable_regcaptcha | Boolean | 判断是否开启注册验证码 |
| enable_checkin_captcha | Boolean | 判断是否开启签到验证码 |
| base_url | Text | 网站域名 |
| recaptcha_sitekey | Text | 生成 g-recaptcha 需求的 recaptcha_sitekey 参数 |
| captcha_provider | Text | 判断使用的验证码类型 recaptcha \| geetest |
| jump_delay | Number | 跳转延时，单位ms |
| register_mode | Text | 注册模式 - close: 关闭，open: 开放，invite: 仅限邀请码 |
| enable_email_verify | Boolean | 是否启用注册邮箱验证码 |
| appName | Text | 站点名称 |
| dateY | Text | 今年哪年 |
| isLogin | Boolean | 登录状态 |
| enable_telegram | Boolean | 判断是否开启Telegram bot |
| enable_mylivechat | Boolean | 判断是否开启客服系统 |
| enable_flag | Boolean | 判断是否开节点前的旗帜 |
| payment_type | Text | 判断支付类型 |

##### geetest_html

| 属性 | type | 说明 |
| :--- | :--- | :--- |
| challenge | Text |  |
| gt | Text |  |
| success | number 0 或 1 |  |