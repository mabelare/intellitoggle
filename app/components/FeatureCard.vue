<script setup lang="ts">
defineProps<{
  icon: string;
  iconAlt?: string;
  title: string;
  description: string;
}>();
</script>

<template>
  <div
    class="flex flex-col rounded-[8px] bg-[#ECEBF5] p-6 lg:h-[256px] w-full max-w-[569px] gap-6 lg:gap-10 lg:p-[24px]"
  >
    <div
      class="relative h-[47px] w-[47px] rounded-[4px] bg-[#42389E] text-white"
    >
      <img
        :src="icon"
        :alt="iconAlt || title"
        class="absolute left-[11px] top-[12px] h-[24px] w-[24px]"
      />
    </div>
    <div class="flex flex-col gap-4 lg:gap-[16px]">
      <h3
        class="text-[20px] font-[700] text-gray-900 lg:text-[24px] lg:leading-[100%] lg:tracking-[-3%] lg:[text-transform:capitalize]"
      >
        {{ title }}
      </h3>
      <p
        class="text-[16px] font-[500] text-gray-600 lg:text-[14px] lg:leading-[24px] lg:[text-transform:capitalize]"
      >
        {{ description }}
      </p>
      <a
        href="#"
        class="inline-flex whitespace-nowrap text-[#42389E] font-[600] hover:underline lg:items-center lg:gap-[10px] lg:text-[14px] lg:leading-[100%] lg:tracking-[0] lg:[text-transform:capitalize]"
      >
        Get Started
      </a>
    </div>
  </div>
</template>
