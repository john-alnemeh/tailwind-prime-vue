
<template>
    <div class="card">
        <Menubar :model="items" :pt="menubarStyles">
            <template #start>
                <img src="/real-estate.svg" alt="Logo" class="h-8" />
            </template>
            <template #item="{ item, props, hasSubmenu, root }">
                <a class="flex items-center" v-bind="props.action">
                    <span :class="item.icon" />
                    <span class="ml-2">{{ item.label }}</span>
                    <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" />
                    <span v-if="item.shortcut" class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{ item.shortcut }}</span>
                    <i v-if="hasSubmenu" :class="['pi pi-angle-down', { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }]"></i>
                </a>
            </template>
            <template #end>
                <div class="flex items-center gap-2">
                    <Button label="Login" severity="info" outlined />
                    <Button label="Sign Up" severity="info" outlined />

                </div>
            </template>
        </Menubar>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useState } from "#app";
import Menubar from "primevue/menubar";
import Button from "primevue/button";
import { useRouter } from "vue-router";
  

const items = ref([
    {
        label: 'Home',
        icon: 'pi pi-home'
    },
    {
        label: 'Features',
        icon: 'pi pi-star'
    },
    {
        label: 'Projects',
        icon: 'pi pi-search',
        items: [
            {
                label: 'Core',
                icon: 'pi pi-bolt',
            },
            {
                label: 'Blocks',
                icon: 'pi pi-server',
            },
            {
                label: 'UI Kit',
                icon: 'pi pi-pencil',
            },
            {
                separator: true
            },
            {
                label: 'Templates',
                icon: 'pi pi-palette',
                items: [
                    {
                        label: 'Apollo',
                        icon: 'pi pi-palette',
                    },
                    {
                        label: 'Ultima',
                        icon: 'pi pi-palette',
                    }
                ]
            }
        ]
    },
    {
        label: 'Contact',
        icon: 'pi pi-envelope',
    }
]);

const menubarStyles = {
    root: {
    class:
      "flex top-0 z-50 sticky text-white justify-between min-h-16 items-center",
  },
  rootList: {
    class: "flex items-center justify-center !text-[#110229] cursor-pointer",
  },
}
</script>