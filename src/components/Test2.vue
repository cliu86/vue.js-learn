<template>
   <div>
        <div>
            <button @click="increase(2, $event)">Click Me</button>
            <button @click="counter++">Click Me</button>
            <p>{{counter * 2 >10 ? 'Greater than 10' : 'Less than 10'}}</p>
        </div>
            <p @mousemove="updateCoordinates()">Coordinates: {{x}} / {{y}} - <span @mousemove.stop>Dead Spot</span></p>
    </div>
</template>

<script>
export default {
  name: 'Test2',
  data () {
    return {
     counter: 0,
     x: 0,
     y: 0
    }
  },
  methods:{
     increase(step, event){
        this.counter += step;
      },
      updateCoordinates(){
          this.x = event.clientX;
          this.y = event.clientY;
      }
  }
}
</script>