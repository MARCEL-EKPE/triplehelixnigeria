<template>
  <div>
    <Nav />
    <div class="about__us">
      <div class="p-3 m-1">
        <h2 class="fw-bold text-center">About us</h2>
        <h6 class="text-center mt-0">Triple Helix Association</h6>
      </div>

      <div class="section__1">
        <div class="img__div1">
          <img src="../assets/abt1.webp" alt="" />
        </div>
        <div class="text__content__1">
          <h4 class="fw-bold">History of the Triple helix Movement</h4>
          <p>
            Triple Helix movement, launched by prof. Henry Etzkowitz and prof.
            Loet Leydesdorff, began in 1996 when a workshop was organized in
            Amsterdam to discuss the Triple Helix Model. This first workshop
            brought together of 90 researchers and attracted participation from
            latin America, Europe, North America and Asia.The workshop was
            subsequently referred to as the first international conference on
            the triple Helix. The second international Triple Helix conference
            was organized two years later in New York, USA (1998), followed by
            bi-annual events in Rio de Janeiro, Brazil (2000), Copenhagan,
            Denmark and Lund, Sweeden (2002), Turin, Italy (2005), Singapor
            (2007) and Glasgow, UK (2009). These conferences explored scientific
            research in the field of: the relationship of science, industry and
            government in their role in creating the conditions for future
            innoation; the importance of location; the capitalization of
            knowledge; cognitive, economic, social and cultural aspects of
            innovation; emerging models for enterpreneurial university; regional
            diversity and global convergence; boundary spanning interaction,
            linking different national cultures and innovation systems; job
            creation an social wealth. The growing number of participants
            demanded the coordination of intensified annual events and Triple
            Helix conferences after 2009. The growing interest and the
            partication in the Triple Helix Movement, lead also to the idea of
            creating an Association that is able to pull together and facilitate
            interaction among international scholars sharing common research
            interests. In 2009 the creation of Triple Helix Association (THA)
            took place in Turin, Italy, where the TH Association is headquatered
            at Fondazione Rosselli, and is chaired by prof. Henry Etzkowitz,
            having prof. Loet Leydesdorff and prof. Jose' Manoel Carvalho de
            Mello as Vice-Presidents.
          </p>
        </div>
      </div>
      <div class="section__2">
        <div class="text__content__2">
          <p>
            The creation of the association and the organization of subsequent
            annual conferencesopened space for the engagement of an annual basis
            with multiple stakeholders, academics, scientists, policy makers,
            and practitioners with interst in the triple Helix Model. The annual
            annual confrence in Madrid, Spain (2010) was focused on the cities
            of knowledge and the expanding knowledge and connecting regions. The
            annual event in 2011 was held in the Silicon Valley, California, USA
            and shifted the emphasis to the global aspects of the Triple Helix
            model, while the 2012 annual event in Bandung, Indonesia, expanded
            the emphasis in developing countries. <br />
            <span class=""
              >The London event in 2012 brought the issue of open innovation and
              invited participants to challenge the Triple Helix model, while
              extending and deepening the application of the conceptual
              aparatus, created as part of the evolution of the Triple helix
              academic community. The large number of participants (over 300)
              from 35 countries indicated the emergence of a Triple Helix
              movement, anchored by the TH Association which has evolved into a
              global organization with 6 regionaal network structure.</span
            >
          </p>
        </div>
        <div class="img__div2">
          <img src="../assets/abt3.webp" alt="" />
        </div>
      </div>
      <div class="section__3">
        <div class="img__div3">
          <img src="../assets/abt4.webp" alt="" />
        </div>
        <div class="text__content__3">
          <h4 class="fw-bold">
            Purpose of the Triple Helix Association (THA) chapters
          </h4>
          <p>
            In order to promote and strengthen its activities at the regional,
            national and multinational levels, the THA encourages the creation
            of chapters that have the following goals: <br />
            <span
              >.Increase visibility and recognition for THA, as the pioneer of
              Triple Helix debate</span
            ><br />
            <span>.Stimulate TH knowlege production;</span><br />
            <span>.Enhance TH knowledge exchange and dissemination;</span><br />
            <span>.Widen TH participation and membership base</span>

            <span>The Tiple Helix Association is open to both</span> <br />
            .Individual members (students, public, policymakers, researchers and
            practitioners) <br />
            .Organizational members (universities and affiliate units, research
            institutions, incubators, science parks, TTOs and Technopoles,
            governmental institutions and private consulting firms) <br />
            involved in Triple Helix interactions and/or scientific debate.
          </p>
        </div>
      </div>
      <div class="section__4">
        <div class="text__content__4">
          <h4 class="fw-bold mt-2">Triple Helix Association Nigeria Chapter</h4>
          <p class="mt-4">
            Ladies and gentle men we are proud to announce that Nigeria, having
            fulfilled all the requirement to establish a chapter to
            operationalize the Triple Helix Model, will at the end of the day,
            be considered latest addition to the league Triple Helix Chapter
            under the African region. <br />

            This good news affords prospective THA members, of being part of a
            leading international research community, enjoy access and
            contributing cutting-edge research findings, insights and case
            studies, expertise and specialized networks, educational and
            opportunities and Open Educational Resources related to innovation,
            enterpreneurship and regional development.
          </p>
        </div>
        <div class="img__div4">
          <img src="../assets/tha-logo.webp" alt="" />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Nav from "../components/Nav.vue";
import Footer from "../components/Footer.vue";
</script>

<style scoped>
.about__us {
  height: 100%;
  width: 100%;
  background-color: #fff;
  background-image: url("../assets/abt-bg.png");
}
/* section__1  */
.section__1 {
  height: 48rem;
  width: 100%;
  display: flex;
  justify-content: space-around;
  /* align-items: center; */
}
.img__div1 {
  margin-top: 20px;
  height: 700px;
  width: 500px;
}
.img__div1 img {
  height: 100%;
  width: 100%;
}
.text__content__1 {
  height: 500px;
  width: 500px;
  padding-right: 10px;
  /* background-image: linear-gradient(280deg, ); */
}
/* Section__2 */
.section__2 {
  margin-top: 2rem;
  height: 35rem;
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.img__div2 {
  height: 500px;
  width: 500px;
}

.img__div2 img {
  height: 100%;
  width: 100%;
}
.text__content__2 {
  height: 400px;
  width: 450px;
  padding-right: 10px;
  /* background-image: linear-gradient(280deg, ); */
}

/* Section__3 */
.section__3 {
  height: 35rem;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.img__div3 {
  height: 500px;
  width: 500px;
}

.img__div3 img {
  height: 100%;
  width: 100%;
}
.text__content__3 {
  height: 450px;
  width: 450px;
  /* background-image: linear-gradient(280deg, ); */
}
/* Section__4 */
.section__4 {
  height: 27rem;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.img__div4 {
  height: 400px;
  width: 500px;
}

.img__div4 img {
  height: 100%;
  width: 100%;
  background-color: #33ae33;
}
.text__content__4 {
  height: 450px;
  width: 460px;
  padding-right: 10px;
  /* background-image: linear-gradient(280deg, ); */
}
</style>
