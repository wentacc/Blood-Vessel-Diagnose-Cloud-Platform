"use strict";(self["webpackChunkcrm_vue"]=self["webpackChunkcrm_vue"]||[]).push([[416],{7416:function(e,l,o){o.r(l),o.d(l,{default:function(){return h}});var a=o(6252),m=o(9963);const t=(0,a.Uk)("男"),s=(0,a.Uk)("女"),u=(0,a.Uk)("未知"),d={style:{"text-align":"center"}},r=(0,a.Uk)("保存");function f(e,l,o,f,n,i){const p=(0,a.up)("el-input"),w=(0,a.up)("el-form-item"),h=(0,a.up)("el-radio"),V=(0,a.up)("el-form"),c=(0,a.up)("el-button"),W=(0,a.up)("el-card");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(W,{style:{width:"40%",margin:"10px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(V,{ref:"form",model:n.form,"label-width":"80px"},{default:(0,a.w5)((()=>[(0,a.Wm)(w,{label:"用户名"},{default:(0,a.w5)((()=>[(0,a.Wm)(p,{modelValue:n.form.username,"onUpdate:modelValue":l[0]||(l[0]=e=>n.form.username=e),disabled:""},null,8,["modelValue"])])),_:1}),(0,a.Wm)(w,{label:"姓名"},{default:(0,a.w5)((()=>[(0,a.Wm)(p,{modelValue:n.form.nickName,"onUpdate:modelValue":l[1]||(l[1]=e=>n.form.nickName=e)},null,8,["modelValue"])])),_:1}),(0,a.Wm)(w,{label:"密码"},{default:(0,a.w5)((()=>[(0,a.Wm)(p,{modelValue:n.form.password,"onUpdate:modelValue":l[2]||(l[2]=e=>n.form.password=e)},null,8,["modelValue"])])),_:1}),(0,a.wy)((0,a.Wm)(w,{label:"年龄"},{default:(0,a.w5)((()=>[(0,a.Wm)(p,{modelValue:n.form.age,"onUpdate:modelValue":l[3]||(l[3]=e=>n.form.age=e)},null,8,["modelValue"])])),_:1},512),[[m.F8,this.isShow]]),(0,a.wy)((0,a.Wm)(w,{label:"性别"},{default:(0,a.w5)((()=>[(0,a.Wm)(h,{modelValue:n.form.sex,"onUpdate:modelValue":l[4]||(l[4]=e=>n.form.sex=e),label:"男"},{default:(0,a.w5)((()=>[t])),_:1},8,["modelValue"]),(0,a.Wm)(h,{modelValue:n.form.sex,"onUpdate:modelValue":l[5]||(l[5]=e=>n.form.sex=e),label:"女"},{default:(0,a.w5)((()=>[s])),_:1},8,["modelValue"]),(0,a.Wm)(h,{modelValue:n.form.sex,"onUpdate:modelValue":l[6]||(l[6]=e=>n.form.sex=e),label:"未知"},{default:(0,a.w5)((()=>[u])),_:1},8,["modelValue"])])),_:1},512),[[m.F8,this.isShow]]),(0,a.wy)((0,a.Wm)(w,{label:"手机号"},{default:(0,a.w5)((()=>[(0,a.Wm)(p,{modelValue:n.form.tel,"onUpdate:modelValue":l[7]||(l[7]=e=>n.form.tel=e)},null,8,["modelValue"])])),_:1},512),[[m.F8,this.isShow]]),(0,a.wy)((0,a.Wm)(w,{label:"地址"},{default:(0,a.w5)((()=>[(0,a.Wm)(p,{modelValue:n.form.address,"onUpdate:modelValue":l[8]||(l[8]=e=>n.form.address=e)},null,8,["modelValue"])])),_:1},512),[[m.F8,this.isShow]])])),_:1},8,["model"]),(0,a._)("div",d,[(0,a.Wm)(c,{type:"primary",onClick:i.update},{default:(0,a.w5)((()=>[r])),_:1},8,["onClick"])])])),_:1})])}var n=o(4471),i={name:"Person",data(){return{form:[],isShow:!0}},created(){let e=sessionStorage.getItem("user")||"{}";this.form=JSON.parse(e),"0"===this.form.role?this.isShow=!1:this.isShow=!0},methods:{update(){let e="";e="0"===this.form.role?"/root":"1"===this.form.role?"/patient":"/specialist",n.Z.put(e,this.form).then((e=>{"0"===e.code?(this.$message({type:"success",message:"更新成功"}),sessionStorage.setItem("user",JSON.stringify(this.form))):this.$message({type:"error",message:e.message})}))}}},p=o(3744);const w=(0,p.Z)(i,[["render",f]]);var h=w}}]);
//# sourceMappingURL=416.084caeea.js.map