const express=require("express");
const app=express();
const bodyParser=require("body-parser");
app.use(bodyParser.json());

const userList=[
    {
        userName:"zhaoyu",
        passWord:"abcde012",
        sex:"男",
        describe:"聪明又帅气",
        email:"1111@163.com",
        createTime:1588400670370
    },
    {
        userName:"yuyongsheng",
        passWord:"fghlm345",
        sex:"男",
        describe:"聪明又帅气",
        email:"2222@163.com",
        createTime:1588400673370
    },
    {
        userName:"yijingzhou",
        passWord:"nopqr678",
        sex:"男",
        describe:"聪明又帅气",
        email:"3333@163.com",
        createTime:1588400672370
    },
    {
        userName:"haoyanhua",
        passWord:"stuvw901",
        sex:"女",
        describe:"活着就好",
        email:"5555@163.com",
        createTime:1588400671370
    }
]

app.post("/login",(req,res)=>{
    const {userName,passWord}=req.body;
    const user=userList.find(v=>v.userName===userName);
    if(user){
        if(user.passWord===passWord){
            res.json({
                ok:1,
                msg:"登录成功",
                user,
            })
            
        }else{
            res.json({
                ok:-1,
                msg:"用户名或密码错误"
            })  
        }
    }else{
        res.json({
            ok:-1,
            msg:"用户名或密码错误"
        })
    }
})

app.get("/personalSet",(req,res)=>{
    const userName=req.query.userName;
    const user=userList.find(v=>v.userName===userName);
    if(user){
        res.json({
            ok:1,
            msg:"登录成功",
            user,
        })
    }else{
        res.json({
            ok:-1,
            msg:"网络错误"
        })
    }
})

app.listen(80,()=>{
    console.log("success")
})