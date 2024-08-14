<script setup>
import Card from "primevue/card";
import Button from "primevue/button";

const props = defineProps({
  headerAlt: {
    type: String,
    default: "Card header",
  },
  headerImgSrc: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: "Card title",
  },
  subtitle: {
    type: String,
    default: "Card subtitle",
  },
  content: {
    type: String,
    default: "Card content",
  },
});
</script>

<template>
  <Card style="width: 20rem; overflow: hidden">
    <template #header>
      <NuxtImg :alt="headerAlt" :src="headerImgSrc" class="w-full" loading="lazy" />
    </template>
    <template #title> {{ title }} </template>
    <template #subtitle> {{ subtitle }} </template>
    <template #content>
      <p class="m-0">
        {{ content }}
      </p>
    </template>
    <template #footer>
      <div class="flex gap-4 mt-1">
        <Button label="View Listings" severity="info" outlined class="w-full" />
      </div>
    </template>
  </Card>
</template>
