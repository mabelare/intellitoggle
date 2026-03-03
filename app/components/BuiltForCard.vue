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
    class="mx-auto flex w-full flex-col items-center justify-center gap-[14px] rounded-[8.48px] bg-white p-[20px] text-center shadow-[0px_5.65px_14.13px_0px_#00000026] lg:min-h-[342px] sm:max-w-[381.57px] lg:gap-[16.96px] lg:p-[28px]"
  >
    <div
      class="mx-auto flex size-14 items-center justify-center rounded-xl bg-[#E3E0FF] lg:size-[84.793px] lg:rounded-[16.96px]"
    >
      <img :src="icon" :alt="iconAlt || title" class="size-10" />
    </div>
    <h3 class="text-[18px] lg:text-[28px] font-semibold text-slate-900">
      {{ title }}
    </h3>
    <p
      class="text-[16px] font-[500] leading-[120%] text-center text-slate-600 lg:text-[18px] lg:leading-[100%]"
    >
      {{ description }}
    </p>
  </div>
</template>
