<template>
  <section
    class="py-[64px] lg:mx-auto lg:mt-[91px] lg:h-[720px] lg:max-w-[1440px] lg:py-[80px]"
  >
    <div
      class="mx-auto flex flex-col gap-8 px-4 lg:h-[538px] w-full lg:max-w-[1243px] lg:justify-between lg:gap-[64px] lg:px-[100px]"
    >
      <div
        class="text-center lg:mx-auto lg:flex lg:h-[132px] w-full lg:max-w-[868px] lg:flex-col lg:justify-between"
      >
        <h2
          class="mx-auto text-3xl font-semibold text-[#2E2E2E] lg:text-[48px] lg:leading-[100%]"
        >
          Built For Every Team
        </h2>
        <p
          class="mt-4 text-base text-[#2E2E2E] lg:mt-[18px] lg:text-[20px] lg:leading-[150%]"
        >
          Whether you're shipping code, managing products, or driving growth
        </p>
      </div>

      <div
        class="grid grid-cols-1 gap-8 lg:mt-[64px] lg:grid-cols-3 lg:justify-between lg:gap-[49px]"
      >
        <BuiltForCard
          icon="/users-icon.png"
          title="Developers"
          description="Safely deploy and control feature rollouts with zero-downtime toggles."
        />
        <BuiltForCard
          icon="/users-icon.png"
          title="Product Managers"
          description="Run experiments, manage rollouts, and launch features on your terms."
        />
        <BuiltForCard
          icon="/users-icon.png"
          title="Enterprises"
          description="Secure, compliant, and scalable toggle management built with Dart reliability."
        />
      </div>
    </div>
  </section>
</template>
