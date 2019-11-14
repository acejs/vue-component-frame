<template>
  <div>
    test
    {{ b }}
  </div>
</template>
<script>
export default {
  name: 'test',
  data () {
    return {
      b: ''
    }
  },
  created () {
    const a = 1
    const b = () => {
      this.b = a
    }
    b()
  }
}
</script>
