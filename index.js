var express = require("express");
var globalConfig = require("./config");
var loader = require("./loader");

var app = new express();


app.use(express.static("./page/"));

app.post("/editEveryDay", loader.get("/editEveryDay"));
app.get("/queryEveryDay", loader.get("/queryEveryDay"));


app.post("/editBlog", loader.get("/editBlog"));
app.get("/queryBlogByPage", loader.get("/queryBlogByPage"));

app.get("/queryBlogCount", loader.get("/queryBlogCount"));
app.get("/queryBlogById", loader.get("/queryBlogById"));
app.get("/queryHotBlog", loader.get("/queryHotBlog"));
app.get("/queryRandomTags", loader.get("/queryRandomTags"));


app.get("/addComment", loader.get("/addComment"));
app.get("/queryCommentsByBlogId", loader.get("/queryCommentsByBlogId"));
app.get("/queryCommentsCountByBlogId", loader.get("/queryCommentsCountByBlogId"));
app.get("/queryNewComments", loader.get("/queryNewComments"));

app.get("/queryRandomCode", loader.get("/queryRandomCode"));
app.get("/queryRandomTags", loader.get("/queryRandomTags"));

app.get("/queryByTag",loader.get("/queryByTag"));
app.get("/queryByTagCount",loader.get("/queryByTagCount"));

app.listen(globalConfig.port,function(){
    console.log("服务器已经启动")
})