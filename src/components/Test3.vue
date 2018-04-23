<template>
   <div>
        <button @click="counter++">Increase</button>
        <button @click="counter--">Decrease</button>
        <button @click="secoundCounter++">SecoundCounter</button>
        <p>{{counter}} | {{secoundCounter}}</p>
        <p>{{result()}} | {{output}}</p>
    </div>
</template>

<script>
export default {
  name: 'Test3',
  data () {
    return {
     counter: 0,
     secoundCounter: 0
    }
  },
  computed:{
      output(){
        console.log('computed');
        return this.counter>5 ? 'Greater than 5' : 'Less than 5';
      }
  },
  //When couter changes do below
  watch:{
      counter(value){
          setTimeout (()=>{
              this.counter = 2;
          },2000);
      }
  },
  methods:{
    result(){
        console.log('method');
        return this.counter >5 ? 'Greater than 5' : 'Less than 5';
    }
  }
}
</script>