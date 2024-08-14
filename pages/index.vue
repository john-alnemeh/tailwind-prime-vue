<script setup>
import Menu from "primevue/menu";

definePageMeta({
  layout: "homelayout",
});

const items = ref([
  { label: "New", icon: "pi pi-plus" },
  { label: "Search", icon: "pi pi-search" },
]);

const accordionItems = ref([
  {
    name: "Amy Elsner",
    avatar: "https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png",
    content:
      "Simply excellent! It certainly made my experience unique! The best of the best!!",
    rate: 5,
  },
  {
    name: "Onyama Limba",
    avatar: "https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png",
    content: "Exceptional service from the team.",
    rate: 4,
  },
  {
    name: "Ioni Bowcher",
    avatar: "https://primefaces.org/cdn/primevue/images/avatar/ionibowcher.png",
    content:
      "A serious company with a well established process that inspires confidence. I had a great agent who guided us from day 1 of the process and always answered any question at any hour, any day.",
    rate: 5,
  },
]);
</script>

<template>
  <main>
    <Head>
      <Title>Home</Title>
    </Head>
    <!-- <ContainersHeaderNavbar /> -->
    <div class="flex items-center justify-center pt-10 xl:container xl:mx-auto">
      <!-- Hero Section -->
      <section
        id="hero"
        class="bg-[url('/Banner_Image.svg')] bg-cover bg-no-repeat bg-top shadow-lg rounded-lg mx-4 md:mx-20 py-20 flex flex-col md:flex-row items-start justify-start overflow-hidden w-full"
      >
        <div class="px-2 text-center max-w-1/2 md:px-0 md:w-1/2">
          <h1
            class="text-6xl md:text-6xl font-serif font-semibold text-[#110229] leading-tight p-8"
          >
            Easy way to find a perfect property
          </h1>
          <p class="mt-4 ml-16 text-xl md:text-xl text-[#585981] leading-relaxed">
            We provide a complete service for the sale, purchase or rental of real estate.
          </p>

          <h1
            class="text-3xl md:text-3xl font-serif font-semibold text-[#110229] leading-tight p-8"
          >
            Some of our users
            <span class="text-yellow-400"
              >Reviews
              <span class="text-yellow-400 pi pi-star-fill whitespace-nowrap"></span
            ></span>
          </h1>
          <SharedAccoridon :items="accordionItems" />
        </div>
      </section>
    </div>
    <!-- Countries Section -->
    <section id="countries" class="relative py-20 overflow-hidden text-center">
      <div class="relative max-w-full px-4 mx-20 text-center">
        <h1
          class="text-5xl md:text-5xl font-serif font-semibold text-[#110229] leading-tight p-8"
        >
          We are available in many <br />
          well-known countries
        </h1>
        <div class="flex flex-col items-center justify-between md:flex-row">
          <SharedCard
            headerAlt="France"
            headerImgSrc="/France.svg"
            title="France"
            subtitle="Paris"
            content="Discover elegant properties in the most beautiful regions of France. Whether you are looking for a beautiful apartment in Paris or a sunny villa on the Côte d'Azur, we have what you need."
          />
          <SharedCard
            headerAlt="Spain"
            headerImgSrc="/Spain.svg"
            title="Spain"
            subtitle="Barcelona"
            content="Discover the perfect home in Spain with our exclusive offers. Whether it’s a sea-view house on the Costa Brava or an apartment in the heart of Barcelona, we help you find your ideal home."
          />
          <SharedCard
            headerAlt="UK"
            headerImgSrc="/UK.svg"
            title="England"
            subtitle="London"
            content="Explore the best real estate opportunities in the UK. Whether you’re looking for a historic home in London or a scenic retreat in the Lake District, we’re here to help."
          />
          <SharedCard
            headerAlt="USA"
            headerImgSrc="/USA.svg"
            title="U.S.A"
            subtitle="New York"
            content="Explore a wide range of properties across the USA. Whether you’re searching for a sleek condo in New York City or a spacious home in sunny Florida, we have the perfect options for you."
          />
        </div>
      </div>
    </section>
    <!-- Data Sample Section -->
    <section id="dataSample" class="relative py-20 overflow-hidden text-center">
      <div class="items-center justify-center xl:container xl:mx-auto">
        <SharedDataView header="Explore Our Trending Properties" />
      </div>
    </section>
    <!-- <ContainersFooterHomeFooter /> -->
    <section id="dataSample" class="relative py-20 overflow-hidden text-center">
      <div class="card flex justify-center">
        <Menu :model="items" :pt="{ root: 'bg-white' }" />
      </div>
    </section>
  </main>
</template>
