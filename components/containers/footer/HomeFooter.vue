<script setup></script>

<template>
  <main>
    <footer className="bg-white text-[#110229] p-9">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex lg:flex-0">
            <NuxtImg src="/real-estate.svg" alt="logo" width="{140}" height="{10}" />
          </div>
          <div className="flex space-x-6">
            <NuxtLink href="#/" className="hover:text-gray-400"> home </NuxtLink>
            <NuxtLink href="#about us" className="hover:text-gray-400"> about </NuxtLink>
            <NuxtLink href="#contact us" className="hover:text-gray-400">
              contact
            </NuxtLink>
          </div>
          <div className="flex space-x-6">
            <NuxtLink href="#" className="hover:text-gray-400"> privacy-policy </NuxtLink>
            <NuxtLink href="#" className="hover:text-gray-400">
              terms-of-service
            </NuxtLink>
          </div>
        </div>
      </div>
    </footer>
  </main>
</template>
