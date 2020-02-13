<template>
    <div>
        <div class="recommend-title">热门推荐</div>
        <ul>
            <li class="recommend-item" v-for="item of recommendLists" :key="item.id">
                <img class="item-img" :src="item.imgUrl"/>
                <div class="item-info">
                    <p class="item-info-title">{{item.title}}</p>
                    <p class="item-info-desc">{{item.desc}}</p>
                    <button class="item-info-btn">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeRecommend',
    data() {
        return {
            recommendLists:[
                {
                    id:'001',
                    imgUrl:'https://imgs.qunarzz.com/sight/p0/1902/3a/3a7013af2c0a2f28a3.img.jpg_200x200_cca146a6.jpg',
                    title:'范家门景区',
                    desc:'热门景点'
                },
                {
                    id:'002',
                    imgUrl:'https://imgs.qunarzz.com/sight/p0/1505/ab/ab70a8d271b5a101.water.jpg_200x200_3fe2346d.jpg',
                    title:'梦幻星空错觉艺术馆',
                    desc:'热门景点'
                },
                {
                    id:'003',
                    imgUrl:'https://imgs.qunarzz.com/sight/p0/1705/59/5995abb3c6146aa8a3.water.jpg_200x200_3084ca06.jpg',
                    title:'天空明星蜡像馆',
                    desc:'热门景点'
                },
                {
                    id:'004',
                    imgUrl:'https://imgs.qunarzz.com/sight/p0/1908/90/90906d0806a45396a3.water.jpg_200x200_d5416ca0.jpg',
                    title:'森田游戏体验馆',
                    desc:'热门景点'
                },
                {
                    id:'005',
                    imgUrl:'https://imgs.qunarzz.com/sight/p0/1711/f0/f0c4ae318d80aff0a3.img.jpg_200x200_34af95c5.jpg',
                    title:'盛世汤泉',
                    desc:'热门景点'
                },
                {
                    id:'006',
                    imgUrl:'https://imgs.qunarzz.com/sight/p0/1905/e2/e2e0774f5e151412a3.img.jpg_200x200_60add920.jpg',
                    title:'建业中原文化小镇之樱桃沟足球小镇',
                    desc:'热门景点'
                },
                {
                    id:'007',
                    imgUrl:'https://imgs.qunarzz.com/sight/p0/1905/20/205855c06fcabaaca3.img.jpg_200x200_fc616288.jpg',
                    title:'郑州失恋博物馆（金博大旗舰店）',
                    desc:'热门景点'
                },
                {
                    id:'008',
                    imgUrl:'https://imgs.qunarzz.com/sight/p0/1602/a6/a6f3173e80a1fe490.img.jpg_200x200_1b3868d1.jpg',
                    title:'滨河温泉假日酒店',
                    desc:'热门景点'
                },
            ]
        }
    },
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.recommend-title
    margin-top .2rem
    line-height .8rem
    background #eee
    text-indent .2rem
.recommend-item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
        width: 1.7rem
        height: 1.7rem
        padding: .1rem
    .item-info
        flex: 1
        padding: .1rem
        min-width: 0
        .item-info-title
            line-height: .54rem
            font-size: .32rem
            ellipsis()
        .item-info-desc
            line-height: .4rem
            color: #ccc
            ellipsis()
        .item-info-btn
            line-height: .44rem
            margin-top: .16rem
            background: #ff9300
            padding: 0 .2rem
            border-radius: .06rem
            color: #fff
</style>