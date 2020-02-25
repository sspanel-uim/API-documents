# Auth

## getCaptcha

### 用于获取验证码

| 路由 | method | cookie |
| :--- | :--- | :--- |
| /getCaptcha | GET | include |

| 返回参数 | type | 说明 |
| :--- | :--- | :--- |
| respon | Number | 请求返回类型 1: 成功 |
| recaptchaKey | Text | g-recaptcha 需要的 sitekey |
| geetest | Object | geetest 需要的对象 |