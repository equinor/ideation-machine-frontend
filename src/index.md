---

home: true
# heroImage: https://raw.githubusercontent.com/equinor/ideation-machine-frontend/d1102ce9a8e9f97a385a433866f6007c01101dc3/src/IdeationMachineLogo.svg
heroImage: https://github.com/equinor/ideation-machine-frontend/blob/main/src/IdeationMachineLogo-CenteredSlogan.png?raw=true
heroText: null
tagline: null
actionText: Get Started →
actionLink: /get-started/
xfeatures:
  - title: About us
    details: "  We are a team of experts in the field of machine learning, utilizing cutting-edge technology to drive innovation and tackle complex problems.

    With a focus on delivering impactful solutions, we strive to stay at the forefront of the industry and continue to push the boundaries of what's possible."
    link: https://raw.githubusercontent.com/equinor/ideation-machine-frontend/875875179edb5fb3079c6099ad568437b6be6201/src/icon_team.svg
  - title: Use cases
    details: Artificial Intelligence (AI) is being used in many different projects in Equinor to automate and streamline tasks, improve efficiency, and make better decisions. Some examples of our AI-driven use cases include MMP natural gas trading, data driven well placement, real-time fluid identification and more.
    link: https://raw.githubusercontent.com/equinor/ideation-machine-frontend/875875179edb5fb3079c6099ad568437b6be6201/src/icon_projects.svg
  - title: Who can apply?
    details: Lorem ipsum
    link: https://raw.githubusercontent.com/equinor/ideation-machine-frontend/875875179edb5fb3079c6099ad568437b6be6201/src/icon_discuss.svg
footer: Made by Ideation Machine with ❤️
---

<div class="features">
  <div class="feature" v-for="feat in $page.frontmatter.xfeatures">
    <img  v-bind:src="feat.link" >
    <h2>{{ feat.title }}</h2>
    <p>{{ feat.details }} </p>
  </div>
</div>

