<template>
    <div>
        <ul>
            <li v-for="(ingredient, i) in ingredients" :key="ingredient">{{ingredient}} ({{i}})</li>
        </ul>
        <template v-for="(ingredient, index) in ingredients">
            <h1 :key="ingredient">{{ingredient}}</h1>
            <p :key="index">{{index}}</p>
        </template>
        <hr>
        <ul>
            <li v-for="person in persons" :key="person">
                <span v-for="(value, key, index) in person" :key="value">{{key}}:{{value}} ({{index}})</span>
            </li>
        </ul>  

        <span v-for="n in 10" :key="n.id">{{n}}</span>      
    </div>
</template>

<script>
export default {
  name: 'Test6',
  data () {
    return {
       ingredients: ['meat', 'fruit' , 'cookies'],
       persons: [
           {name: 'Max', age: 27, color: 'red' },
           {name: 'Anna', age: 'unknow', color: 'blue' },
       ]
    }
  }
}
</script>