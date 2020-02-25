# User

## logout

### 登出

| 路由 | method | cookie |
| :--- | :--- | :--- |
| /logout | GET | include |

| 返回参数 | type | 说明 |
| :--- | :--- | :--- |
| ret | Number | 请求返回类型 1: 成功 |

## getUserInfo

### 获取用户信息

| 路由 | method | cookie |
| :--- | :--- | :--- |
| /getuserinfo | GET | include |

| 返回参数 | type | 说明 |
| :--- | :--- | :--- |
| ret | Number | 请求返回类型 1: 成功 \| -1: 未登录 |
| info | [Object](/User.html#info) | 当前用户邀请信息 |

## getUserInviteInfo

### 获取当前用户邀请信息

| 路由 | method | cookie |
| :--- | :--- | :--- |
| /getuserinviteinfo | GET | include |

| 返回参数 | type | 说明 |
| :--- | :--- | :--- |
| ret | Number | 请求返回类型 1: 成功 \| -1: 未登录 |
| inviteInfo | [Object](/User.html#inviteinfo) | 用户信息 |

## Object 属性

#### info

| 属性 | type | 说明 |
| :--- | :--- | :--- |
| user | Object | 返回用户属性 |
| ssrSubToken | Text | ssr订阅链接token |
| displayIosClass | Number | 可见ios公共帐号最低等级，小于0时关闭此功能 |
| iosAccount | Text | ios公共帐号username |
| iosPassword | Text | ios公共帐号password |
| mergeSub | Boolean | 是否合并单端口/普通端口订阅 |
| subUrl | [Text](User.html#suburl) | 是否合并单端口/普通端口订阅 |
| baseUrl | Text | 网站地址链接 |
| ann | [Object](/User.html#ann) | 最新公告 |
| recaptchaSitekey | Null | 没卵用 |
| GtSdk | Null | 没卵用 |

#### inviteInfo

| 属性 | type | 说明 |
| :--- | :--- | :--- |
| code | Text | 用户邀请码 |
| paybacks | Array | 邀请记录 |
| paybacks_sum | Number | 当前用户已获得返利 |
| invite_num | Number | 当前用户邀请链接剩余次数 |
| invitePrice | Number | 邀请链接单价 |
| customPrice | Number | 邀请链接定制单价 |
| invite_gift | Number | 邀请一个用户获得的流量奖励 |
| invite_get_money | Number | 被邀请用户获得的余额奖励 |
| code_payback | Number | 去百分号的百分比数字，被邀请用户充值时当前用户获得的余额 |

##### ann

| 属性 | type | 说明 |
| :--- | :--- | :--- |
| content | Text | 最新公告的Html字符串 |
| date | Text | 最新公告的最后修改时间 |
| id | Number | 最新公告的id |
| markdown | Text | 最新公告的Markdown格式字符串 |

## 备注

#### subUrl

::: tip
需要配合ssrSubToken使用，组合成为订阅链接，使用方法如下
:::

```javascript
let subscribeUrl = subUrl + ssrSubToken //构成订阅链接，含有params可选
```

| params | 说明 |
| :--- | :--- |
| mu | 订阅链接类型 0:普通端口ssr \| 1:单端口ssr \| 2:v2ray \| 3: ss/ssd |