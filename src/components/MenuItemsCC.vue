<template>
    <div class="wrap">
        <div class = "menu-nav_wrap">
            <ul>
                <li v-for = "(item, key) in menu" :key = "key">
                    <a :class = "key==menuItem ? 'active' : 'notactive'"
                        @click = "changeItem(key)">{{key}}</a>
                </li>
            </ul>
        </div>
        <div class="menu-list_wrap">
            <div class="menu-list_row" v-for = "num in 7" :key = "num">
                <div class="menu-list_column" v-for = "n in 3" :key = "n">
                    <div class="item_name">{{menu[menuItem].name}}</div>

                    <div class="item_price">{{menu[menuItem].price}}</div>
                    <div class="item_desc">{{menu[menuItem].decr}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
        data() {
            return {
                menu : {
                    soup:{  name: 'SOUP MINESTRONE',
                            price: '25,20 USD',
                            decr: 'Integer ullamcorper neque eu purus euismod'
                            },
                    pizza:{name: 'PIZZA QUATRO STAGIONI',
                            price: '55,68 USD',
                            decr: 'Integer ullamcorper neque eu purus euismod'
                            },
                    pasta:{name: 'PASTA CARBANARA',
                            price: '55,68 USD',
                            decr: 'Integer ullamcorper neque eu purus euismod'
                            },
                    desert:{name: 'TIRAMISU',
                            price: '15,00 USD',
                            decr: 'Integer ullamcorper neque eu purus euismod'
                            },
                    wine:{name: 'SHIRAZ',
                            price: '45,05 USD',
                            decr: 'Integer ullamcorper neque eu purus euismod'
                            },
                    beer:{name: 'HENNEKEN',
                            price: '10,68 USD',
                            decr: 'Integer ullamcorper neque eu purus euismod'
                            },
                    drinks:{name: 'ORANGE JUICE',
                            price: '5,00 USD',
                            decr: 'Integer ullamcorper neque eu purus euismod'
                            },

                },
                menuItem: 'soup',
            }
        },
        methods: {
            changeItem(key) {
                this.menuItem = key;
            },
            activeItem(key) {
                return key == this.menuItem
            },
        }
}
</script>
<style scoped>
    .wrap {
        width: 100%;
        height: 535px;
    }
    .menu-nav_wrap {
       max-width: 840px;
       margin: 50px auto 50px auto;
    }
    .menu-nav_wrap ul{
        max-width: 840px;
        height: 50px;
        position: relative;
        display: flex;
        /* flex-direction: row; */
        /* flex: 0 0 100%; */
        justify-content: center;
        align-items: center;
    }
    .menu-nav_wrap ul li {
        border-right: 1px solid rgba(51, 51, 51, 0.2);
        width: 120px;
        height: 50px;
        list-style: none;
        text-align: center;
        display: flex;
        justify-content: center;
    }
    .menu-nav_wrap ul li:last-child {
        border-right: none;
    }
    .active, .notactive {
        text-decoration: none;
        font-family: Open Sans;
        font-weight: bold;
        font-size: 12px;
        line-height: 50px;
        display: block;
        height: 50px;
        width: 80px;
        color: #333333;
        text-transform: uppercase;
        cursor: pointer;
    }
    .active {
        border-bottom: 1px solid rgba(51, 51, 51, 0.2);
    }
    .menu-list_wrap {
        height: 432px;
        width: 100%;
    }
    .menu-list_row {
        width: 100%;
        display:flex;
        flex-direction: row;
        justify-content:space-between;
        align-items: center;
    }
    .menu-list_column {
        min-height: 66px;
        max-width: 363px;
        padding-right: 10px;
        padding-left: 10px;
        display:flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .item_name, .item_price {
        font-family: Banny;
        font-size: 18px;
        line-height: 18px;
        color: #333333;
    }
    .item_price {
        padding-left: 10px;
    }
    .item_desc {
         font-size: 12px;
         line-height: 18px;
         color: rgba(51, 51, 51, 0.5);
         margin-top: -25px;
    }
</style>