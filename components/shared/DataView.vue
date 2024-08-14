<script setup>
import { ref } from "vue";
import DataView from "primevue/dataview";

import { ProductService } from "../../services/DataSample";

onMounted(() => {
  ProductService.getProducts().then((data) => (products.value = data.slice(0, 12)));
});

const products = ref();
const layout = ref("grid");
const options = ref(["list", "grid"]);
const props = defineProps({
  header: {
    type: String,
    default: "Card header",
  },
});

const getSeverity = (product) => {
  switch (product.inventoryStatus) {
    case "Available":
      return "success";

    case "Not Available":
      return "danger";

    default:
      return null;
  }
};
</script>

<template>
  <div class="card">
    <DataView :value="products" :layout="layout">
      <template #header>
        <div class="flex justify-center">
          <h1
            class="text-3xl md:text-3xl font-serif font-semibold text-[#110229] leading-tight"
          >
            {{ header }}
          </h1>
        </div>
      </template>

      <template #grid="slotProps">
        <div class="grid grid-cols-12 gap-1">
          <div
            v-for="(item, index) in slotProps.items"
            :key="index"
            class="col-span-12 p-2 sm:col-span-6 md:col-span-4 xl:col-span-6"
          >
            <div class="flex flex-col p-6 border rounded border-surface-200 bg-surface-0">
              <div class="flex justify-center p-4 rounded bg-surface-50">
                <div class="relative mx-auto">
                  <img class="w-full rounded" :src="`${item.image}`" :alt="item.name" />
                </div>
              </div>
              <div class="pt-6">
                <div class="flex flex-row items-start justify-between gap-2">
                  <div>
                    <span class="text-sm font-medium text-surface-500">{{
                      item.category
                    }}</span>
                    <div class="mt-1 text-lg font-medium">{{ item.name }}</div>
                    <span class="mr-2 text-sm font-medium text-surface-500">{{
                      item.location
                    }}</span>
                    <span class="mr-2 text-sm font-medium text-surface-500">{{
                      item.size
                    }}</span>
                    <br />
                    <span class="mr-2 text-sm font-medium text-surface-500"
                      >Bedrooms: {{ item.bedrooms }}</span
                    >
                    <span class="mr-2 text-sm font-medium text-surface-500"
                      >Bathrooms: {{ item.bathrooms }}</span
                    >
                  </div>
                  <div>
                    <div class="p-1 bg-surface-100" style="border-radius: 30px">
                      <div
                        class="flex items-center justify-center gap-2 px-2 py-1 bg-surface-0"
                        style="
                          border-radius: 30px;
                          box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04),
                            0px 1px 2px 0px rgba(0, 0, 0, 0.06);
                        "
                      >
                        <span class="text-sm font-medium text-surface-900">{{
                          item.rating
                        }}</span>
                        <i class="text-yellow-500 pi pi-star-fill"></i>
                      </div>
                    </div>
                    <Tag
                      :value="item.inventoryStatus"
                      :severity="getSeverity(item)"
                      class="relative"
                      style="left: 4px; top: 4px"
                    ></Tag>
                  </div>
                </div>
                <div class="flex flex-col gap-6 mt-6">
                  <span class="text-2xl font-semibold">${{ item.price }}</span>
                  <div class="flex gap-2">
                    <Button
                      icon="pi pi-shopping-cart"
                      label="Shop Now"
                      severity="info"
                      :disabled="item.inventoryStatus === 'Not Available'"
                      class="flex-auto whitespace-nowrap"
                      :pt="{ icon: 'text-white', label: 'text-white' }"
                    ></Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </DataView>
  </div>
</template>
