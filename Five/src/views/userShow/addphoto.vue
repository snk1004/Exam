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
      url="https://service.jasonandjay.com/upload"
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
  computed: {
    ...mapGetters([
      'avatar',
      'userInfo'
    ])
  },
  methods: {
    ...mapActions({
      getreneval: 'usershow/getReneval',
      getInfo: 'user/getInfo'
    }),
    cropSuccess(e) {
      const path = e[0].path
      this.getreneval({
        user_id: this.userInfo.user_id,
        avatar: path
      }).then(res => {
        if (res.code === 1) {
          this.$message({
            message: res.msg,
            type: 'success'
          })
          this.getInfo()
        }
      })
      this.imagecropperShow = false
    },
    close() {
      this.imagecropperShow = false
    }
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
