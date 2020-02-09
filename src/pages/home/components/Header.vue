<template>
    <div class="header">
        <div class="header-left">
            <span class="iconfont back-icon">&#xe743;</span>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe7b3;</span>
            <input type="text" placeholder="搜索 景点/游玩"/>
        </div>
        <div class="header-right">城市<span class="iconfont arrow-icon">&#xe601;</span></div>
    </div>
</template>
<script>
export default {
    name:'HomeHeader'
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';
/* 
 转换为rem ：html 的 font-size= 50px;
 图上是2倍，则 1rem = header的高度/100 = .86rem;
 */
    .header
        background :$bgColor
        display :flex
        line-height :.86rem
        color:#fff
        .header-left
            width :.64rem
            float:left
        .header-input
            flex :1
            margin-top:.12rem
            margin-left:.2rem
            height :.62rem
            line-height :.62rem
            color:#ccc
            background :#fff
            border-radius:.1rem
        .header-right
            width :1.24rem
            float:right
            text-align :center
</style>