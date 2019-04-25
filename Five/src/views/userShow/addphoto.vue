<template>
  <div class="app-container">
    <div v-if="avatar">
      <pan-thumb :image="avatar" />
    </div>
    <el-button class="sure" type="primary" icon="upload" style="position: absolute;bottom: 15px;margin-left: 40px;" @click="imagecropperShow=true">
      Change Avatar
    </el-button>

    <image-cropper
      v-show="imagecropperShow"
      :key="imagecropperKey"
      :width="300"
      :height="300"
      lang-type="en"
      url="http://123.206.55.50:11000/upload"
      @close="close"
      @crop-upload-success="cropSuccess"
    />
  </div>
</template>
<script>
import ImageCropper from '@/components/ImageCropper'
import PanThumb from '@/components/PanThumb'
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
    ImageCropper,
    PanThumb
  },
  data() {
    return {
      imagecropperShow: false,
      imagecropperKey: 0
    }
  },
  methods: {
    ...mapActions({
      getreneval: 'usershow/getReneval'
    }),
    cropSuccess(e) {
      const path = e[0].path
      console.log(path, 'path...')
      this.getreneval({
        user_id: this.userInfo.user_id,
        user_name: this.userInfo.user_name,
        identity_id: this.userInfo.identity_id,
        avatar: path
      }).then(res => {
        if (res.code === 1) {
          alert(res.msg)
        }
      })
      this.imagecropperShow = false
    },
    close() {
      this.imagecropperShow = false
    }
  },

  computed: {
    ...mapGetters([
      'avatar',
      'userInfo'
    ])
  }
}
</script>

<style lang="scss" scoped>
.sure{
  top:120px;
  left:300px;
  width: 150px;
  height: 50px;
}
</style>
