<template>
  <div v-if="data.title || data.paragraph" class="section-header">
    <div class="container-xs">
      <slot />
      <component
        :is="tag"
        v-if="data.title"
        class="mt-0"
        :class="data.paragraph ? 'mb-16' : 'mb-0'"
      >
        {{ data.title }}
      </component>
      <p
        v-if="data.paragraph"
        class="m-0"
        v-html="data.paragraph"
      >
        {{ data.paragraph }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CSectionHeader',
  props: {
    data: {
      type: Object,
      default: () => {
        return {
          title: '',
          paragraph: ''
        }
      }
    },
    tag: {
      type: String,
      default: 'h2',
      validator: (value) => {
        return ['h1', 'h2', 'h3'].includes(value)
      }
    }
  }
}
</script>
