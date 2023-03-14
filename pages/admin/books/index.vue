<template>
    <v-container>
        <HeadingView
            title="Books"
        >
        </HeadingView>
    </v-container>
</template>

<script>
definePageMeta({
  middleware: ["auth"],
  // or middleware: 'auth'
});
import HeadingView from '~/components/table/HeadingView.vue';
export default {
    components:{
        HeadingView
    },
    data(){
        return{

        };
    }

}
</script>

<style>

</style>