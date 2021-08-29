<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-dialog">
          <button type="button" class="close" @click="closeModal">
            <span aria-hidden="true">&times;</span>
          </button>
          <img :src="imagePath" alt="imagePath" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ["imagePath"],
  methods: {
    closeModal() {
      this.$emit("close-modal");
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  &-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    transition: opacity 0.3s ease;
  }
  &-dialog {
    margin: 0;
    width: 100%;
    height: 100%;
    max-width: none;
    pointer-events: all;

    img {
      max-width: 100%;
      max-height: 100%;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
  &-wrapper {
    width: calc(100% - 2rem);
    height: calc(100% - 2rem);
  }
}
.close {
  position: absolute;
  right: 1rem;
  top: 1rem;
  z-index: 9999;
  opacity: 1;
  font-size: 3rem;
  font-weight: 300;
  line-height: 0.3;
  color: #fff;

  &:not(:disabled):not(.disabled):hover,
  &:not(:disabled):not(.disabled):focus {
    opacity: 1;
  }

  &:hover {
    color: #fff;
    opacity: 0.75;
  }
}
</style>