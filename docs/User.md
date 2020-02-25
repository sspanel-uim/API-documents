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

## getUserShops

### 获取商店商品

| 路由 | method | cookie |
| :--- | :--- | :--- |
| /getusershops | GET | include |

| 返回参数 | type | 说明 |
| :--- | :--- | :--- |
| ret | Number | 请求返回类型 1: 成功 \| -1: 未登录 |
| shops | [Array](/User.html#arr-shops) | 商品列表 |

## getAllResourse

### 用于获取更新用户的余额和剩余流量等信息

| 路由 | method | cookie |
| :--- | :--- | :--- |
| /getallresourse | GET | include |

| 返回参数 | type | 说明 |
| :--- | :--- | :--- |
| ret | Number | 请求返回类型 1: 成功 \| -1: 未登录 |
| resourse | [Object](/User.html#resourse) | 用户的余额和剩余流量等信息 |

## getNewSubToken

### 用于重置订阅链接

| 路由 | method | cookie |
| :--- | :--- | :--- |
| /getnewsubtoken | GET | include |

| 返回参数 | type | 说明 |
| :--- | :--- | :--- |
| ret | Number | 请求返回类型 1: 成功 \| -1: 未登录 |
| ssr_sub_token | Text | 重置后用户的订阅链接token |

## getNewInviteCode

### 用于重置用户邀请链接

| 路由 | method | cookie |
| :--- | :--- | :--- |
| /getnewsubtoken | GET | include |

| 返回参数 | type | 说明 |
| :--- | :--- | :--- |
| ret | Number | 请求返回类型 1: 成功 \| -1: 未登录 |
| code | Text | 重置后用户的邀请码 |

## getTransfer

### 用于获得用户传输数据

| 路由 | method | cookie |
| :--- | :--- | :--- |
| /gettransfer | GET | include |

| 返回参数 | type | 说明 |
| :--- | :--- | :--- |
| ret | Number | 请求返回类型 1: 成功 \| -1: 未登录 |
| arr | [Array](/User.html#arr-transfer) | 用户传输数据数组 |

## getChargeLog

### 用于获取用户充值记录

| 路由 | method | cookie |
| :--- | :--- | :--- |
| /getChargeLog | GET | include |

| 返回参数 | type | 说明 |
| :--- | :--- | :--- |
| ret | Number | 请求返回类型 1: 成功 \| -1: 未登录 |
| codes | [Array](/User.html#arr-codes) | 用户充值记录数组 |

## Object 属性

### info

| 属性 | type | 说明 |
| :--- | :--- | :--- |
| user | [Object](User.html#info-user) | 返回用户属性 |
| ssrSubToken | Text | ssr订阅链接token |
| displayIosClass | Number | 可见ios公共帐号最低等级，小于0时关闭此功能 |
| iosAccount | Text | ios公共帐号username |
| iosPassword | Text | ios公共帐号password |
| mergeSub | Boolean | 是否合并单端口/普通端口订阅 |
| subUrl | [Text](User.html#suburl) | 是否合并单端口/普通端口订阅 |
| baseUrl | Text | 网站地址链接 |
| ann | [Object](/User.html#info-ann) | 最新公告 |
| recaptchaSitekey | Null | 没卵用 |
| GtSdk | Null | 没卵用 |

#### info.user

可真太几把多了

| 属性 | type | 说明 |
| :--- | :--- | :--- |
| accountExpireDays | Number | 账户过期剩余天数 |
| auto_reset_bandwidth | Text | 自动重置流量值 |
| auto_reset_day | Number | 自动重置天数 |
| class | Number | 当前用户等级 |
| class_expire | Text | 用户等级过期时间 |
| class_notification | Number | 用户等级过期提示 1:不会发邮件 0： 会发发完变1 |
| d | Number | 用户下行数据量，单位字节 |
| disconnect_ip | Text | 用户封禁IP |
| discord | Text |  |
| email | Text | 用户邮箱 |
| enable | Number | 用户是否启用 1:启用 |
| expire_in | Text | 用户账户过期时间 |
| expire_notification | Number | 用户账户过期提醒 1:不会发邮件 0： 会发发完变1 |
| expire_notified | Number | 用户账户已经过期提醒 0:没过期还没发邮件 0：过期发完邮件变1 |
| expire_time | Number |  |
| forbidden_ip | Text |  |
| forbidden_port | Text |  |
| ga_enable | Number | 谷歌二步验证是否开启 1:开启 |
| ga_token | Text | 谷歌二步验证 token |
| id | Number | 用户 ID |
| im_type | Number | 用户联系方式类型 |
| im_value | Text | 用户联系方式 |
| invite_num | Text | 邀请人ID |
| isAbleToCheckin | Boolean | 是否还能签到 |
| is_admin | Boolean | 是否是管理员帐号 |
| is_email_verify | Number |  |
| is_hide | Number |  |
| is_multi_user | Number | 是否是单端口承载用户 |
| lastUsedTraffic | Text | 已用流量 |
| last_check_in_time | Number | 时间戳 最后签到时间 |
| last_day_t | Number |  |
| last_get_gift_time | Number |  |
| last_rest_pass_time | Number |  |
| levelExpireDays | Number | 用户等级过期天数 |
| method | Text | 用户加密方式 |
| money | Text | 用户余额 |
| node_connector | Number | 限制设备数 |
| node_group | Number | 节点分组 |
| node_speedlimit | Text | 用户限速 |
| obfs | Text | 用户混淆协议 |
| obfs_param | Text | 用户混淆协议参数 |
| online_ip_count | Number | 用户在线 IP 数 |
| pac | Text |  |
| pass | Text |  |
| passwd | Text | 用户ss密码 |
| plan | Text |  |
| port | Number | 用户端口 |
| protocol | Number | 用户协议 |
| protocol_param | Text | 用户协议参数 |
| ref_by | Number |  |
| reg_date | Text | 用户注册时间 |
| reg_ip | Text | 用户注册IP |
| remark | Text |  |
| sendDailyMail | Number | 是否接收每日邮件 1:接收 0:不接收 |
| ss_url_all | Text | ss复制所有链接地址 |
| ssd_url_all | Text | ssd复制所有链接地址 |
| ssr_url_all | Text | ssr复制所有链接地址 |
| ssr_url_all_mu | Text | ssr单端口复制所有链接地址 |
| switch | Number |  |
| t | Number |  |
| t_notification | Number |  |
| telegram_id | Number | 用户TG ID |
| theme | Number | 用户主题 |
| todayUsedTraffic | Text | 用户今日使用流量 |
| traffic_notification | Number |  |
| traffic_notified | Number |  |
| transfer_enable | Number | 用户可用流量，单位字节 |
| type | Number |  |
| u | Number | 用户上行流量，单位字节 |
| unUsedTraffic | Text | 用户未用流量 |
| user_name | Text | 用户昵称 |
| vmess_url_all | Text | v2ray复制所有链接地址 |

#### info.ann

| 属性 | type | 说明 |
| :--- | :--- | :--- |
| content | Text | 最新公告的Html字符串 |
| date | Text | 最新公告的最后修改时间 |
| id | Number | 最新公告的id |
| markdown | Text | 最新公告的Markdown格式字符串 |

### inviteInfo

| 属性 | type | 说明 |
| :--- | :--- | :--- |
| code | Text | 用户邀请码 |
| paybacks | [Array]((User.html#arr-paybacks)) | 邀请记录 |
| paybacks_sum | Number | 当前用户已获得返利 |
| invite_num | Number | 当前用户邀请链接剩余次数 |
| invitePrice | Number | 邀请链接单价 |
| customPrice | Number | 邀请链接定制单价 |
| invite_gift | Number | 邀请一个用户获得的流量奖励 |
| invite_get_money | Number | 被邀请用户获得的余额奖励 |
| code_payback | Number | 去百分号的百分比数字，被邀请用户充值时当前用户获得的余额 |

### resourse

| 属性 | type | 说明 |
| :--- | :--- | :--- |
| money | Number | 用户余额 |
| class | Number | 用户等级 |
| class_expire | Text | 用户等级过期时间 |
| expire_in | Text | 用户账户过期时间 |
| online_ip_count | Number | 用户账在线IP数 |
| node_speedlimit | Number | 用户限速 |
| node_connector | Number | 用户设备限制数 |

## 备注

### subUrl

::: tip
需要配合ssrSubToken使用，组合成为订阅链接，使用方法如下
:::

```javascript
let subscribeUrl = subUrl + ssrSubToken //构成订阅链接，含有params可选
```

| params | 说明 |
| :--- | :--- |
| mu | 订阅链接类型 0:普通端口ssr \| 1:单端口ssr \| 2:v2ray \| 3: ss/ssd |

### arr-shops

包含一组对象，属性如下

| 属性 | type | 说明 |
| :--- | :--- | :--- |
| auto_renew | Number | 是否自动续费 |
| auto_reset_bandwidth | Number | 自动重置的流量 |
| content | [Text](User.html#shopsitem-content-json) | Json数据 |
| id | Number | 商品id |
| name | Text | 商品名称 |
| price | Number | 商品价格 |
| status | Number | 商品是否上架 1:都是1，后端已经筛除未上架商品 |

#### shopsitem.content.json

可能会出现如下键值对，未设置的不会返回

| key | value | 说明 |
| :--- | :--- | :--- |
| bandwidth | Number | 商品流量 |
| expire | Number | 商品账户有效期，单位天 |
| class | Number | 商品等级 |
| class_expire | Number | 商品0等级有效期，单位天 |
| reset | Number | 重置周期 |
| reset_value | Number | 重置流量，单位GB |
| reset_exp | Number | 重置时长，单位天 |
| reset_exp | Number | 重置时长，单位天 |
| speedlimit | Number | 商品限速，单位MB |
| connector | Number | 商品限制设备数 |
| content_extra | Text | 商品卡片下面的文字，每条以 `check-` 开头，`;` 隔开 |

### arr-codes

包含一组对象，属性如下

| 属性 | type | 说明 |
| :--- | :--- | :--- |
| data | [Object](User.html#codesitem-data) | 充值记录 |

#### codesitem.data

| 属性 | type | 说明 |
| :--- | :--- | :--- |
| code | Text | 充值方式 |
| number | Number | 充值金额 |
| usedatetime | Text | 充值时间 |

### arr-paybacks

包含一组对象，属性如下

| 属性 | type | 说明 |
| :--- | :--- | :--- |
| data | [Object](User.html#paybacksitem-data) | 返利数据 |

#### paybacksitem.data

| 属性 | type | 说明 |
| :--- | :--- | :--- |
| id | Number | 返利 ID |
| userid | Number | 被邀请用户 ID |
| ref_get | Number | 返利金额 |

### arr-transfer

包含一个对象，属性如下

| 属性 | type | 说明 |
| :--- | :--- | :--- |
| todayUsedTraffic | Number | 用户今天使用的流量 |
| lastUsedTraffic | Number | 用户使用的总流量 |
| unUsedTraffic | Number | 用户未使用的流量 |