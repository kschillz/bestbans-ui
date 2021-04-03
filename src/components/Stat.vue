<template>
  <p class="hidden lg:block">
    {{ label }}
    <span class="text-right">{{ stat }}</span>
  </p>
  <div class="lg:hidden flex flex-col pb-2">
    <div class="font-bold underline">{{ label }}</div>
    <div>{{ stat }}</div>
  </div>
</template>

<script>
export default {
  name: "Stat",
  props: {
    label: String,
    stat: Number,
  },
};
</script>