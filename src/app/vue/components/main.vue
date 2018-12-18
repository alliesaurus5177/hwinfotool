<template>
    <main>
        <b-container fluid>

            <b-table 
                responsive
                striped hover
                head-variant="light" 
                foot-variant="light"
                foot-clone
                stacked="lg"
                :items="data">
             <!-- To make headers sortable, add :fields="fields" and uncomment fields. Data will disappear if you do this right now-->       
            </b-table>

        </b-container fluid>
    </main>
</template>

<script>
    var Papa = require('papaparse');
    export default {
        data () {
            return {
                data: [],
                /*fields: [
                    {
                        key: 'hostname',
                        label: 'Hostname',
                        sortable: true
                    }, 
                    {
                        key: 'os',
                        label: 'Operating System',
                        sortable: true
                    }, 
                    {
                        key: 'model',
                        label: 'Model',
                        sortable: true
                    },     
                    {
                        key: 'serial',
                        label: 'Serial Number',
                        sortable: false
                    }, 
                    {
                        key: 'cpus',
                        label: 'CPUs',
                        sortable: true
                    }, 
                    {
                        key: 'cores',
                        label: '# Cores',
                        sortable: true
                    }, 
                    {
                        key: 'threads',
                        label: 'Total Threads',
                        sortable: true
                    },
                    {
                        key: 'cpu model',
                        label: 'CPU Model',
                        sortable: true
                    },
                    {
                        key: 'ram',
                        label: 'RAM (GB)',
                        sortable: true
                    },     
                    {
                        key: 'disk size',
                        label: 'Disk Size (GB)',
                        sortable: true
                    },                                                                                                                                                                         
                ]  */
            }  
        },
        created() {
            $.get('dist/assets/data/hardware_data.csv', (response) => {
                this.data = Papa.parse(response, {
                    header: true,
                    skipEmptyLines: true
                });
                this.data = this.data.data;
                //console.log(this.data);
            });
        }
    }
</script>