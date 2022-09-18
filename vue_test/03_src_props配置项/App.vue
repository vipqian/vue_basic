<template>
  <div>
    <Student name="Tom" sex="男" :age='13'/>
  </div>
</template>

<script>
import Student from './components/Student'

export default {
  name: 'App',
  components: {
    Student
  },
}
</script>

<style>
  
</style>
