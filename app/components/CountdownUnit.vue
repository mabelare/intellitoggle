<script setup lang="ts">
defineProps<{
  value: string;
  label: string;
}>();
</script>

<template>
  <div
    class="rounded-lg bg-[#F9A71E] size-[75px] px-2.5 py-1.5 text-center text-white lg:px-3 flex items-center justify-center flex-col gap-2"
  >
    <p class="text-lg font-semibold leading-none lg:text-2xl">{{ value }}</p>
    <p class="mt-1 text-[9px] uppercase lg:text-[11px]">
      {{ label }}
    </p>
  </div>
</template>
