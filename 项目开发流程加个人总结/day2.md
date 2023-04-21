# 设置axios的拦截器

对于验证身份，使用JWT方案

发送请求前需要在请求头中设置token

接收请求前对网络、响应做异常处理，采用ElMessage做提示



# 验证响应状态

axios把2xx的status都认为是响应成功

response.data.status是为了**验证响应的数据**而设计的

这个值应为布尔值，值不为true时，应存在字符串response.data.statusText做说明



# 后端生成token

使用uuid生成token，每个用户都有一个静态token



# 用户登录

预检请求通过，真实请求发送时遇到了同源策略问题

因为axios默认请求的数据类型为json，Content-type被设置为application/json

此时Content-type不再属于简单首部

而且预检响应的Access-Control-Allow-Headers中未配置Content-type

需在预检响应头中配置Access-Control-Allow-Headers：Content-type



# 后端验证用户信息

先要把请求体中的数据提取出来

参照express官网，使用body-parser提供的中间件填充req.body

通过req.body中的数据验证，通过后发送token



# 后端验证token

已登陆的用户都会有token，简便起见，token没有时间限制且保存在localStorage中

已登陆的用户请求时会在请求头中设置token字段，此时的请求头中包含自定义头部

会将请求变为复杂请求，会发起预检请求，产生同源策略问题

需在预检响应头中配置Access-Control-Allow-Headers：token



应该在登录业务完成后配置判断token的有无、正确

token验证不通过就不能next



# js文件使用pinia的store

pinia模块默认导出是函数，这个函数执行后才可以使用store

导出的函数在vue组件中运行不会出现问题

在js文件中必须考虑执行顺序，app.use(pinia)必须先于导出的函数执行


