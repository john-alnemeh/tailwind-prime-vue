<template>
    <div class="card ml-10">
      <Accordion>
        <AccordionPanel v-for="(item, index) in items" :key="index" :value="index">
          <AccordionHeader>
            <span class="flex items-center gap-2 w-full">
              <Avatar :image="item.avatar" shape="circle" />
              <span class="font-bold whitespace-nowrap">{{ item.name }}</span>
            </span>
          </AccordionHeader>
          <AccordionContent>
            <span class="flex items-center gap-2 w-full">
              <p class="m-0">{{ item.content }}</p>
              <Rating v-model="item.rate" readonly />
              </span>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </div>
  </template>
  
  <script setup>
  import Avatar from 'primevue/avatar';
  
  const props = defineProps({
    items: {
      type: Array ,
      required: true,
    }
  });
  </script>