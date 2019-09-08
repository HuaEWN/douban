var Mock = require("mockjs");

//配置数据请求
Mock.mock("/che","get",require("./json/che.json"))
Mock.mock("/cp","get",require("./json/ppt.json"))
Mock.mock("/see","get",require("./json/see.json"))
Mock.mock("/books","get",require("./json/books.json"))
Mock.mock("/seebook","get",require("./json/seebook.json"))
Mock.mock("/xiaozu","get",require("./json/xiaozu.json"))