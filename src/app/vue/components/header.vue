<template>
    <header>
        <!-- TODO: make logo vanish on mobile sizes --> 
        <b-container fluid>
            <b-row class="header-content">
                <b-col cols="1"><img src="dist/images/intel-logo-blue.png"/></b-col>
                <b-col class="d-inline-flex justify-content-center align-items-center">
                    <h1>TCAR CAT Hardware Information Tool</h1>
                </b-col>
            </b-row>
        </b-container fluid>
    </header>
</template>

<script>
    export default {
        data(){
            return {

            }
        }
    }
</script>

<style lang="scss">
    header {
        display: flex;
        background-color: #0071c5;
        color: white; 
    }
</style> 