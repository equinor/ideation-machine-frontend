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
    link: https://raw.githubusercontent.com/equinor/ideation-machine-frontend/9c5978af2bf6f0a19e2f0fff23359ea7405b28ff/src/assets/img/icon_team.svg
  - title: Machine learning
    details: Train your model and analyse the data using top-of-the-line and easy-to-use machine learning tools 
    # link: https://raw.githubusercontent.com/equinor/ideation-machine-frontend/875875179edb5fb3079c6099ad568437b6be6201/src/icon_projects.svg
    link: https://raw.githubusercontent.com/equinor/ideation-machine-frontend/b047f4a8eb34b4f3ec4067fc9f6c9b01ecaa0844/src/assets/img/ai-new.svg
  - title: Value realization 
    details: Solve your problem, achieve business value and use the solution locally or deploy it with the assistance of our DevOps team. 
    link: https://raw.githubusercontent.com/equinor/ideation-machine-frontend/b047f4a8eb34b4f3ec4067fc9f6c9b01ecaa0844/src/assets/img/lighbulb-new.svg
footer: Made by Ideation Machine with ❤️
---

<div class="features">
  <div class="feature" v-for="feat in $page.frontmatter.xfeatures">
    <img  v-bind:src="feat.link" >
    <h2>{{ feat.title }}</h2>
    <p>{{ feat.details }} </p>
  </div>
</div>

