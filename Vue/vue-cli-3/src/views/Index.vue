<template>
<div>
    <h1>index</h1>
    <component-name :msg="str"></component-name>
</div>
</template>

<script>
import Component from '@/components/Component.vue'

export default {

    name : 'Index',

    data() {
        return {
            str : 'component test',
        }
    },

    components : {
        'component-name' : Component,
    },

}
</script>
