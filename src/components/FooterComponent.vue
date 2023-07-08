<template>
    <footer>
        <p class="text-xs">Terms of Service | Privacy Policy </p>
        <p class="text-xs">Chronos © - {{ year }}</p>
    </footer>
</template>

<script lang="ts">
export default {
    name: 'FooterComponent',
    data() {
        const date = new Date();
        return {
            year: date.getFullYear(),
        };
    },
};
</script>