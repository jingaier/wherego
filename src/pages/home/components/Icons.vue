<template>
    <div class="icons">
        <swiper>
        <!-- slides -->
        <swiper-slide v-for="item of page" :key="item.index">
            <div class="icon" v-for="icon of item" :key="icon.id">
                <div class="icon-img">  
                    <img class="icon-img-content" :src="icon.imgUrl"/>
                </div>
                <p class="icon-desc">{{icon.desc}}</p>
            </div>
            
        </swiper-slide>
        
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
        <!-- <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div> -->
        </swiper>
    </div>
</template>
<script>
export default {
    name:'HomeIcons',
    data() {
        return {
            iconLists:[
                {
                    id:'001',
                    imgUrl:'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                    desc:'热门景点'
                },
                {
                    id:'002',
                    imgUrl:'https://imgs.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
                    desc:'温泉滑雪'
                },
                {
                    id:'003',
                    imgUrl:'https://imgs.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
                    desc:'一日游'
                },
                {
                    id:'004',
                    imgUrl:'https://imgs.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
                    desc:'郑州方特'
                },
                {
                    id:'005',
                    imgUrl:'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/e98eea7ed037b04a5af0250ca8a1abd7.png',
                    desc:'少林寺'
                },
                {
                    id:'006',
                    imgUrl:'https://imgs.qunarzz.com/piao/fusion/1803/8c/47630407f70e8302.png',
                    desc:'电影小镇'
                },
                {
                    id:'007',
                    imgUrl:'https://imgs.qunarzz.com/piao/fusion/1803/fc/b10a6b2e4f0fe102.png',
                    desc:'嵩顶滑雪场'
                },
                {
                    id:'008',
                    imgUrl:'https://imgs.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
                    desc:'海洋馆'
                },
                {
                    id:'009',
                    imgUrl:'https://imgs.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
                    desc:'嵩山'
                },
                {
                    id:'010',
                    imgUrl:'https://imgs.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
                    desc:'黄帝宫温泉'
                },
            ]
        }
    },
    computed: {
        page(){
            const pages = []
            this.iconLists.forEach((item,index)=>{
                const page = Math.floor(index/8);
                if(!pages[page]){
                    pages[page] = []
                }
                pages[page].push(item)
                
            })
            return pages
        }
    }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';

    .icons>>>.swiper-container
        /* a */
        height 0
        padding-bottom 50%
        /* background #ccc */
        .icon
            position relative
            overflow hidden
            float left
            width 25%
            height 0
            padding-bottom 25%
            /* background red */
            .icon-img
                position absolute
                top 0
                left 0
                right 0
                bottom .44rem
                box-sizing border-box
                padding .1rem
                /* background blue */
                .icon-img-content
                    height 100%
                    display block
                    margin 0 auto
            .icon-desc
                position absolute
                left 0
                right 0
                bottom 0
                line-height .44rem
                height .44rem
                color $color_333 
                text-align center
                ellipsis()
</style>