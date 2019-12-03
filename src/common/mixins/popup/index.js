export const PopupMixin = {
  props: {
    value: Boolean,
    zIndex: [String, Number],
    lockScroll: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      inited: this.value
    }
  },
  computed: {

  },
  watch: {

  },
  mounted() {

  },
  activated() {

  },
  beforeDestory() {

  },
  deactivated() {

  },
  methods: {
    open() {

    }
  }
}
