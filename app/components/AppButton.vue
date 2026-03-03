<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    variant?: "primary" | "secondary" | "cta-primary" | "cta-ghost";
  }>(),
  {
    variant: "primary",
  },
);

const variantClasses: Record<string, string> = {
  primary:
    "bg-[#42389E] text-white shadow-[0px_4px_4px_0px_#00000040] hover:bg-indigo-800 transition-colors",
  secondary:
    "border border-[#42389E] bg-[#ece9fb] text-[#42389E] shadow-[0px_4px_4px_0px_#00000040] hover:bg-white transition-colors",
  "cta-primary": "bg-[#F9A71E] text-[#42389E] hover:bg-[#E8960A] transition-colors",
  "cta-ghost":
    "border border-[#FF99AA71] text-[#F9A71E] shadow-[0px_4px_4px_0px_#00000040] hover:bg-white/10 transition-colors",
};
</script>

<template>
  <button
    type="button"
    :class="[
      'inline-flex items-center justify-center gap-[10px] whitespace-nowrap rounded-[5px] font-[700] leading-[23px]',
      variantClasses[props.variant],
    ]"
  >
    <slot />
  </button>
</template>
