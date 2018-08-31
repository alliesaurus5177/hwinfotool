<template>
    <main>
        <b-container fluid>

            <h2>This is the main content</h2>
            
            <p>Here is some content</p>

            <b-table 
              striped hover 
              responsive 
              head-variant="light" 
              foot-variant="light" 
              stacked="lg" 
              foot-clone 
              :items="data" 
              :fields="fields">
            </b-table>      

        </b-container fluid>
    </main>
</template>

<script>
//TODO: Add ability to download .csv 

//Trying this with axios because it has nice syntax 
import axios from 'axios';

    var Papa = require('papaparse');
    export default {
        data () {
            return {
                fields: [
                  {
                    key: 'Hostname',
                    label: 'Hostname' ,
                    sortable: true
                  }, 
                  {
                    key: 'Operating system',
                    label: 'Operating System', 
                    sortable: true
                  },
                  {
                    key: 'Vendor',
                    label: 'Vendor', 
                    sortable: true
                  },
                  {
                    key: 'Model',
                    label: 'Model', 
                    sortable: true
                  },
                  {
                    key: 'Serial Number',
                    label: 'Serial Number', 
                    sortable: false
                  },
                  {
                    key: 'CPUs',
                    label: 'CPUs', 
                    sortable: true
                  },
                  {
                    key: 'Total Threads',
                    label: 'Total Threads', 
                    sortable: true
                  },
                  {
                    key: 'CPU Model',
                    label: 'CPU Model', 
                    sortable: true
                  },
                  {
                    key: 'RAM (GB)',
                    label: 'RAM (GB)', 
                    sortable: true
                  },
                  {
                    key: 'Disk 1',
                    label: 'Disk 1', 
                    sortable: true
                  },
                  {
                    key: 'Disk 2',
                    label: 'Disk 2', 
                    sortable: true
                  },
                  {
                    key: 'Disk 3',
                    label: 'Disk 3', 
                    sortable: true
                  },
                  {
                    key: 'Pingable',
                    label: 'Pingable', 
                    sortable: true,
                    formatter: (value) => { 
                      if(value === '1') { 
                        return 'Yes'; 
                      } else {
                        return 'No';
                      } 
                    }, 
                    tdClass: (value, key, item) => {
                      if(value == true) {
                        return 'bg-success text-light';
                      } else {
                        return 'bg-danger text-light';
                      }
                    }
                  },
                ],
                data: [] 
            }  
        },
        created() {
          axios.get('dist/assets/data/hwinfodata.csv')
            .then(response => {
              this.data = Papa.parse(response.data, {
                header: true, 
                skipEmptyLines: true,
              })
              this.data = this.data.data; //have to drill down twice to get to the actual data. 
              //console.log(this.data);
            })
            .catch(e => {
              //console.log(e);
              alert(e);
            })  
        }
    }
</script>