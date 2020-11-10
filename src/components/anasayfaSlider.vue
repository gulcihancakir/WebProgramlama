<template>
  <div class="content">
  
   
        <input type="radio" id="trigger1" name="slider" />
    <label for="trigger1"></label>
    <div class="slide bg1"></div>
    <!-- <img v-bind:src="image2" alt="" srcset=""> -->

    

    <input type="radio" id="trigger2" name="slider" checked autofocus />
    <label for="trigger2"></label>
    <div class="slide bg2"></div>
    <!-- <img v-bind:src="image1" alt="" srcset=""> -->


  </div>
</template>
<script>
export default {
  name: "slider",
  abc:{
image1:"https://www.minikterzi.com/Uploads/Slider/-14.jpg?t=20200510120301",
    image2:    "https://www.minikterzi.com/Uploads/Slider/-19.jpg?t=20201004124852",

  },
  data() {
    return {
      images: [
        "https://www.minikterzi.com/Uploads/Slider/-14.jpg?t=20200510120301",
        "https://www.minikterzi.com/Uploads/Slider/-19.jpg?t=20201004124852",
      ],
      timer: null,
      currentIndex: 0,
    };
  },

 
};
</script>
<style >
body, html {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  /* overflow: hidden; */
}

input {
  position: absolute;  
  opacity: 0;
  margin-top: 95vh;
  cursor: pointer;
}

label {
  display: inline-block;
  width: 12px;
  height: 12px;
  border: solid 2px white;
  border-radius: 999px;
  background-color: transparent;
  margin: 95vh 6px 0 6px;
  z-index: 2;
  cursor: pointer;
  transition-duration: .4s;
}

input:checked + label{
  background-color: white;
}

input:focus + label{
  box-shadow: 0 0 0 2px white, 0 0 18px white;
}

.slide {
  position: absolute;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  transform: translateX(-100%);
  transition-duration: .4s;
  opacity: 1;
}

input:checked ~ .slide {
  transform: translateX(100%);
}

input:checked + label + .slide {
  transform: translateX(0);
  opacity: 1;
}


.bg1{
  background-image: url(https://www.minikterzi.com/Uploads/Slider/-14.jpg?t=20200510120301);
}
.bg2{
  background-image: url(https://www.minikterzi.com/Uploads/Slider/-19.jpg?t=20201004124852);
}

</style>