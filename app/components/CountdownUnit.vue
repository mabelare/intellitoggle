<script setup lang="ts">
defineProps<{
  value: string;
  label: string;
}>();
</script>

<template>
  <div
    :aria-label="value + ' ' + label"
    class="rounded-lg bg-[#F9A71E] size-[60px] sm:size-[75px] px-2.5 py-1.5 text-center text-white lg:px-3 flex items-center justify-center flex-col gap-2"
  >
    <p class="text-lg font-semibold leading-none lg:text-2xl" aria-hidden="true">{{ value }}</p>
    <p class="mt-1 text-[9px] uppercase lg:text-[11px]" aria-hidden="true">
      {{ label }}
    </p>
  </div>
</template>
