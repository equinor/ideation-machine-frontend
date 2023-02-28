---

home: true
# heroImage: https://raw.githubusercontent.com/equinor/ideation-machine-frontend/d1102ce9a8e9f97a385a433866f6007c01101dc3/src/IdeationMachineLogo.svg
heroImage: https://github.com/equinor/ideation-machine-frontend/blob/main/src/IdeationMachineLogo-CenteredSlogan.png?raw=true
heroText: null
tagline: null
actionText: Get Started →
actionLink: /get-started/
xfeatures:
  - title: Business problem
    details: Turn your business problem into a machine learning problem with our help
    link: https://raw.githubusercontent.com/equinor/ideation-machine-frontend/6ccb3d1535c13086b875c5aef65d543a8a09c972/src/assets/img/equinor_icon_start.svg
  - title: Machine learning
    details: Train your model and analyse the data using top-of-the-line and easy-to-use machine learning tools 
    # link: https://raw.githubusercontent.com/equinor/ideation-machine-frontend/875875179edb5fb3079c6099ad568437b6be6201/src/icon_projects.svg
    link: https://raw.githubusercontent.com/equinor/ideation-machine-frontend/6ccb3d1535c13086b875c5aef65d543a8a09c972/src/assets/img/equinor_icon_AI.svg
  - title: Deployment 
    details: Deploy your model and start using it with the assitance of our DevOps team
    link: https://raw.githubusercontent.com/equinor/ideation-machine-frontend/6ccb3d1535c13086b875c5aef65d543a8a09c972/src/assets/img/equinir_icon_deploy.svg
footer: Made by Ideation Machine with ❤️
---

<div class="features">
  <div class="feature" v-for="feat in $page.frontmatter.xfeatures">
    <img  v-bind:src="feat.link" >
    <h2>{{ feat.title }}</h2>
    <p>{{ feat.details }} </p>
  </div>
</div>

