<script setup>
defineProps({
  src: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  show: {
    type: Boolean,
    required: true,
  }
})
</script>

<script>
    export default {
        data() {
            return {
                ImagePopupShow: false
            }
        },
        watch: {
            show: {
                handler(val){
                    console.log(val)
                    this.ImagePopupShow = val
                }
            }
        },
        methods: {
            closePopup: function() {
                this.ImagePopupShow = false
            }
        }
    }
</script>
  <template>
    <div
        v-if="ImagePopupShow"
        class="image-popup-container"
    >
        <button
            class="image-popup-button"
            @click="closePopup"
        >X</button>
        <img
            :src="src"
            :alt="title"
            :title="title"            
            class="image-popup-image"
        >
    </div>
</template>

<style>
.image-popup-container {
    background-color: #ddd;
    position: absolute;
    width: 100%;
    z-index: 9;
}
.image-popup-image {
    width: calc(100% - 120px);
    margin: 60px;
}
.image-popup-button {
    border-radius: 30px;
    width: 56px;
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 2em;
}
</style>