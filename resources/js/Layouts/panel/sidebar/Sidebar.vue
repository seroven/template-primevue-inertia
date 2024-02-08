<template>
    <div class="sidebar">
        <div class="brand">
            <div class="logo">
                <!-- <img :src="this.$assets.image.logoGrupoFlesan" class="h-full" /> -->
            </div>
            <div class="trigger">
                <a href="#" @click="toggleSidebar">
                    <i name="menu-outline" class="pi pi-align-justify font-bold"></i>
                    <i name="chevron-back-outline" class="pi pi-chevron-left font-bold"></i>
                </a>
            </div>
        </div>
        <nav class="navbar">
            <ul>
                <SidebarItem v-for="(item, index) in items" :key="index" :item="item"></SidebarItem>
            </ul>
        </nav>

        <div class="sign-out p-2 ">
            <div class="flex-1 flex align-items-center">
                <img
                    class="sign-out-info-image w-3rem h-3rem flex-none border-round" />
                <div class="sign-out-info-name flex-auto flex flex-column justify-content-center">
                    <span class="pl-2">USUARIO</span>
                    <span class="pl-2 text-md font-bold">ROL DE USUARIO</span>
                </div>
            </div>
            <div class="w-1rem">
                <i class="pi pi-cog" @click="openSettings($event)"></i>
                <ConfirmPopup>
                    <template #container="{ message, acceptCallback, rejectCallback }">
                        <Settings />
                    </template>
                </ConfirmPopup>
            </div>

        </div>
    </div>
</template>
<script>
import { SidebarItems } from "../../../shared/constants/sidebar-items";
import Settings from "../settings/Settings.vue"
import SidebarItem from "./SidebarItem.vue";

export default {
    emits: ['changeSidebarClass'],
    props: {
        sidebarClass: null
    },
    components: {
        SidebarItem,
        Settings
    },
    data() {
        return {
            items: SidebarItems,
            country: null,
        };
    },
    mounted() {
        const submenu = document.querySelectorAll(".has-child > a");
        function toogle() {
            if (!this.parentNode.classList.contains("collapse")) {
                this.parentNode.classList.remove("hidden-items");
                setTimeout(() => {
                    this.parentNode.classList.add("collapse");
                }, 10);
            } else {
                this.parentNode.classList.remove("collapse");
                setTimeout(() => {
                    this.parentNode.classList.add("hidden-items");
                }, 400);
            }
        }
        submenu.forEach((menu) => menu.addEventListener("click", toogle));
        this.createResizeEvent();
        window.onresize = (event) => {
            this.createResizeEvent();
        };
    },
    methods: {
        toggleSidebar() {
            var screenWidth =
                window.innerWidth ||
                document.documentElement.clientWidth ||
                document.body.clientWidth;
            if (screenWidth > 600) {
                this.$emit('changeSidebarClass', this.sidebarClass == "mininav"
                    ? ""
                    : "mininav")
            } else {
                this.$emit('changeSidebarClass', this.sidebarClass == "floatnav"
                    ? ""
                    : "floatnav")
            }
        },
        createResizeEvent() {
            var screenWidth =
                window.innerWidth ||
                document.documentElement.clientWidth ||
                document.body.clientWidth;
            if (
                (screenWidth < 600 &&
                    this.sidebarClass == "mininav") ||
                (screenWidth > 600 &&
                    this.sidebarClass == "floatnav")
            ) {
                this.$emit('changeSidebarClass', "");
            }
        },
        openSettings(event) {
            this.$confirm.require({
                target: event.currentTarget,
                accept: () => { },
                reject: () => { }
            })
        },
    },
};
</script>
