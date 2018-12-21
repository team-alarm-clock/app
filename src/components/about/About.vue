<template>
  <div class="team-div">
    <h2>ABOUT US</h2>
    <section class="bio-body">
      <img src="https://ca.slack-edge.com/T6FCZF1HR-UDFV35JF7-50e310923778-72" alt="profile photo">
      <section class="bio-col">
        <h3>Paige Gorry</h3>
          <p>
             Experience in nonprofit work, volunteer management, and community management. Passionate about mental health, diversity, and LGBTQ+ causes. Current software development student at Alchemy Code Lab. I am passionate about learning new technology and collaborative problem solving.
          </p>
      </section> 
    </section>   
    <section class="bio-body">
      <img src="https://avatars2.githubusercontent.com/u/38193198?s=400&v=4" class="carmen" alt="profile photo">
      <section class="bio-col">
        <h3>Carmen Ramos</h3>
          <p>
              Mother,  student,  software developer, food and nutrition enthusiast
          </p>
      </section>  
    </section> 
    <section class="bio-body">
      <img src="https://ca.slack-edge.com/T6FCZF1HR-UDGTMUUFR-a84f193cf11f-72" alt="profile photo">
      <section class="bio-col">
        <h3>Abel Quintero</h3>
          <p>
             Born and raised in Chicago, got sick of brutal winters and flat land, drawn to Portland for its creative scenes in music, design, and tech
          </p>
      </section>  
    </section>  
    <section class="bio-body">
      <img src="https://ca.slack-edge.com/T6FCZF1HR-UDGGR59BN-acc07133bac4-72" alt="profile photo">
      <section class="bio-col">
        <h3>Michael Elliot</h3>
          <p>
             S-DiT (Software Developer In Training), Musician, Recovering Art School Student, Chef, Father, Miscreant, KJiT ( KJ In Training )
          </p>
      </section>  
    </section>  
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.team-div {
  /* margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; */
  padding: 50px;
}
.bio-body {
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: flex-start;
  margin: 0 auto;
  text-align: left;
  width: 65%;
  margin-top: 40px;
  margin-bottom: 40px;
}
.bio-col {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
img {
  border-radius: 25% 25% 25% 25%;
  box-shadow: 5px 10px black;
}

h3 {
  font-size: 1.75em;
  padding: 20px;
  margin-bottom: 0;
}

p {
  font-size: 1.05em;
  margin: 0 auto;
  padding: 20px;
  padding-top: 0;
}

h1 {
  margin-bottom: 0;
}

.carmen {
  width: 192px;
  height: 192px;
}

</style>
