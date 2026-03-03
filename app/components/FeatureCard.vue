<script setup lang="ts">
import { Icon } from "@iconify/vue";

defineProps<{
  icon: string;
  title: string;
  description: string;
}>();
</script>

<template>
  <div
    class="flex flex-col rounded-[8px] bg-[#ECEBF5] p-6 lg:min-h-[256px] w-full max-w-[569px] gap-6 lg:gap-10 lg:p-[24px]"
  >
    <div
      class="flex h-[47px] w-[47px] items-center justify-center rounded-[4px] bg-[#42389E] text-white"
    >
      <Icon :icon="icon" class="h-[24px] w-[24px]" aria-hidden="true" />
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
        :aria-label="'Get Started with ' + title"
        class="inline-flex whitespace-nowrap text-[#42389E] font-[600] hover:underline focus:outline-none focus:ring-2 focus:ring-[#42389E] focus:rounded-sm lg:items-center lg:gap-[10px] lg:text-[14px] lg:leading-[100%] lg:tracking-[0] lg:[text-transform:capitalize]"
      >
        Get Started
      </a>
    </div>
  </div>
</template>
