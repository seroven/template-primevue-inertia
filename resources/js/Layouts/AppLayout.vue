<template>
    <div id="page" :class="`site ${sidebarClass}`">
        <Sidebar @changeSidebarClass="changeSidebarClass" :sidebarClass="sidebarClass"></Sidebar>
        <div class="main">
            <div class="container">
                <div class="container-panel">
                    <!-- <Header @changeSidebarClass="changeSidebarClass" :sidebarClass="sidebarClass"></Header> -->
                    <div class="panel">
                        <router-view></router-view>
                    </div>
                </div>
                <Footer></Footer>
            </div>

        </div>
    </div>
</template>
<script>
import Sidebar from './panel/sidebar/Sidebar.vue';
import Footer from './panel/footer/Footer.vue';

export default {
    components: {
        Sidebar,
        Footer,
    },
    data(){
        sidebarClass: ''
    },
    methods: {
        changeSidebarClass(){
            this.sidebarClass = '';
        }
    }
}
</script>

<style>
@import './panel/sidebar/SidebarStyles.css';
@import './AppStyles.css';
</style>