<script setup lang="ts">
defineProps<{
  quote: string;
  photo: string;
  name: string;
  role: string;
}>();
</script>

<template>
  <div
    class="mx-auto flex flex-col rounded-[4px] border-2 border-[#FFFAFA] bg-[#FEFEFF] p-[24px] shadow-[0px_4px_10px_0px_#0000001A] lg:h-[276px] w-full lg:max-w-[396px] lg:gap-[18px] lg:px-[30px] lg:py-[40px]"
  >
    <p
      class="text-left text-[18px] font-[400] italic leading-[150%] text-[#101010] lg:text-[20px]"
    >
      "{{ quote }}"
    </p>

    <div
      class="mt-auto flex items-center gap-3 lg:h-[82px] w-full lg:gap-[23.08px]"
    >
      <img
        :src="photo"
        :alt="name"
        class="h-[56px] w-[56px] rounded-full object-cover lg:h-[69.231px] lg:w-[69.231px] lg:rounded-[69.23px]"
      />
      <div
        class="flex flex-col gap-[4px] text-left lg:h-[43px]"
      >
        <p
          class="font-jakarta text-[16px] font-[700] leading-[132%] text-[#121316]"
        >
          {{ name }}
        </p>
        <p
          class="text-[14px] font-[400] leading-[125%] text-[#121316]"
        >
          {{ role }}
        </p>
      </div>
    </div>
  </div>
</template>
