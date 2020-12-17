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
            <div class="menu-list" v-for = "item in menu[menuItem]" :key = "item.name">
                    <div class="item_name">{{item.name}}</div>
                    <div class="item_price">{{item.price}}</div>
                    <div class="item_desc">{{item.decr}}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
        data() {
            return {
                // menuDraft: added one name of dish and number to repeat, can be easy replaced by real object
                // menu created in created, all multiplied. We can easy pass object with real menu
                menuDraft : {
                    soup:[{name: 'SOUP MINESTRONE',
                            price: '25,20 USD',
                            decr: 'Integer ullamcorper neque eu purus euismod'
                            }, 10],
                    pizza:[{name: 'PIZZA QUATRO STAGIONI',
                            price: '55,68 USD',
                            decr: 'Integer ullamcorper neque eu purus euismod'
                            }, 21],
                    pasta:[{name: 'PASTA CARBANARA',
                            price: '55,68 USD',
                            decr: 'Integer ullamcorper neque eu purus euismod'
                            }, 21],
                    desert:[{name: 'TIRAMISU',
                            price: '15,00 USD',
                            decr: 'Integer ullamcorper neque eu purus euismod'
                            }, 14],
                    wine:[{name: 'SHIRAZ',
                            price: '45,05 USD',
                            decr: 'Integer ullamcorper neque eu purus euismod'
                            }, 21],
                    beer:[{name: 'HENNEKEN',
                            price: '10,68 USD',
                            decr: 'Integer ullamcorper neque eu purus euismod'
                            }, 19],
                    drinks:[{name: 'ORANGE JUICE',
                            price: '5,00 USD',
                            decr: 'Integer ullamcorper neque eu purus euismod'
                            }, 21],

                },
                menu: {},
                menuItem: 'pizza',
            }
        },
        methods: {
            changeItem(key) {
                this.menuItem = key;
            },
            activeItem(key) {
                return key == this.menuItem
            },
            createMenu() {
                for (let key in this.menuDraft) {
                    this.menu[key] = [];
                    for (let i = 0; i < this.menuDraft[key][1]; i++) {
                        this.menu[key].push(this.menuDraft[key][0]);
                    }
                }
                 console.log(JSON.stringify(this.menu, null, 4))
            }
        },
        created: function created() {
            this.createMenu()
        }
}
</script>
<style scoped>
    .wrap {
        width: 100%;
        height: auto;
        margin-left: auto;
        margin-right: auto;
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
    .notactive {
        border-bottom: 1px solid rgba(51, 51, 51, 0.2);
    }
    .active {
        border-bottom: none;
    }
    .menu-list_wrap {
        /* height: 432px; */
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .menu-list {
        width: 378px;
        height: 66px;
        display:flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    @media(max-width: 1325px){
        .menu-list {
            padding: 0 15px;
        }
    }
    @media(max-width: 1133px){
        .menu-list_wrap {
            justify-content: center;
        }
    }
    @media(max-width: 770px){
        .menu-nav_wrap ul li {
            width: 14%;
        }
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
    @media(max-width: 375px){
        .active, .notactive {
            font-size: 10px;
        }
        .item_name, .item_price {
            font-size: 12px;
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
    }
</style>
755