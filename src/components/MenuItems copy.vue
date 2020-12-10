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
            <div class="menu-list_column" v-for = "num in 3" :key = "num">
                <div class="menu-list_row" v-for = "n in 7" :key = "n">
                    <!-- <div class="item_name">{{menu[menuItem].name}}</div>
                    <div class="item_price"></div>
                    <div class="item-desc"></div> -->
                </div>

            </div>
        </div>
    </div>
</template>
<script>
export default {
        data() {
            return {
                // menuDraft: added one name of dish and number to repeat, can be easy replaced by real object
                // menu created in mounted, all multiplied
                menuDraft : {
                    soup:[{name: 'SOUP MINESTRONE',
                            price: '25,20 USD',
                            decr: 'Integer ullamcorper neque eu purus euismod'
                            }, 10],
                    pizza:[{name: 'PIZZA QUATRO STAGIONI',
                            price: '55,68 USD',
                            decr: 'Integer ullamcorper neque eu purus euismod'
                            }, 15],
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
            createMenu() {
                for (let key in this.menuDraft) {
                    for (let i = 0; i < this.menuDraft[key][1]; i++) {
                        this.menu[key] = this.menuDraft[key][0];
                    }
                }
                console.log(this.menu.soup)
            }
        },
        mounted: function mounted() {
            this.createMenu()
        }
}
</script>
<style scoped>
    .wrap {
        width: 100%;
        height: 535px;
        margin-left: auto;
        margin-right: auto;


    }
    .menu-nav_wrap ul{
        width: 1280px;
        height: 50px;
        position: relative;
        display: flex;
        flex: 0 0 100%;
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
    .menu-list_column {
        width: 363px;
        margin-left: 10px;
        margin-right: 77px;
    }
    .menu-list_row {
        height: 36px;
        width: 100%;
    }
</style>