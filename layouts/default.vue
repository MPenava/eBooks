<template>
  <div v-if="loaded">
    <admin v-if="this.$route.fullPath.startsWith('/admin')"></admin>
    <public else></public>
  </div>
</template>

<script>
import Admin from '~/layouts/admin.vue';
import Public from '~/layouts/public.vue';

export default {
    components:{
        Admin,
        Public
    },
    data(){
        return{
            loaded:false
        };
    },
    created(){
    },
    mounted() {
        const self = this;
        setTimeout(() => {
        this.$nextTick(() => {
            self.loaded = true;
        })
        }, 300)
    }
};
</script>

<style></style>
