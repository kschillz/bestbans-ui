<template>
  <p>
    {{ label }}
    <span class="text-right">{{ stat }}</span>
  </p>
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