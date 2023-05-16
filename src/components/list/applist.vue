<template>
  <div class="item-list">
        <div class="item-box">
            <div class="item-box_imageContainer">
               <img src="" class="item-image">
            </div>
            <div class="item-box_content">
                 <h3>xxxxxxx</h3>
                 <div class="item-box_category">
                   <span>xxxxx</span>
                 </div>
                 <div class="intro">
                    vvvvvvvccfefskdhfireklsdkjfmsgnfhieftghbnj
                 </div>
            </div>
            <div class="item-box_footer">
                  <div class="item-box_detailsItem">
                       <SvgIcon></SvgIcon>
                       更新时间：
                       <span class="timeago">
                        klloodmjo
                       </span>
                  </div>
                  <div class="item-box_buttonBottom">
                    <span>查看</span>
                  </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.item-list {
  height: 100%;
  left: 400px;
  color: #000;
}
.item-box{
  position: relative;
  width: 800px;
  height: 240px;
  left: 550px;
  top: 20px;
  border-radius: 20px;
  box-shadow: 0 0 16px #fff;
  background-color: #5d8966;
  display: flex;
}
.item-box_imageContainer {
    display: flex;
}
.item-image {
    width: 300px;
    height: 200px;
    border-radius: 20px;
    color: #fff;
}
.item-box_content {
    color: #999;
    font-size: 12px;
    overflow: hidden;
    margin-left: 20px;
    padding-right: 10px;
}
.item-box_category {
    margin-top: 16px;
    margin-bottom: 16px;
}
.item-box_category span {
    padding: 2px 9px;
    border-radius: 20px;
    white-space: nowrap;
    cursor: pointer;
    border: 1px solid #ddd;
}
.item-box_content .intro {
    color: #fff;
    font-size: 13px;
}
.item-box_detailsItem{
    margin-top: 20px;
}
.timeago {
    color: #787878;
    font-size: 12px;
}
.item-box_buttonBottom{
   width: 100%;
}
.item-box_buttonBottom span {
    width: 100px;
    border-radius: 50px;
    background: #fff;
    font-size: 12px;
    border: 1px solid #f1f1f1;
    color: #666;
}
.item-box_footer {
    padding-left: 16px;
    border-left: 1px solid #e6e6e6;
    padding-top: 30px;
}
</style>