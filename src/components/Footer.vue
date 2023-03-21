<template>
  <div class="footer">
    <section class="section__1 fw-bolder">
      <div class="address">
        <i class="bi bi-geo-alt-fill p-1" style="font-size: 1.25rem"></i>
        <span class="fw-bold">Fidel Avenue</span> <br />
        <span class="fw-bold p-3">Port-Harcourt, Nigeria</span>
      </div>
      <div class="phone">
        <i class="bi bi-telephone-fill p-1" style="font-size: 1.25rem"></i>
        <span class="fw-bold">+2347039631235</span>
      </div>
      <div class="mail">
        <i
          class="bi bi-envelope-fill"
          style="font-size: 1.25rem; margin-left: 3px"
        ></i>
        <a href="#" class="text-decoration-none ps-2 fw-bold"
          >thanigeia@company.com</a
        >
      </div>
    </section>
    <section class="section__2 fw-bolder">
      <h5 class="fw-bold">THA Nigeria Chapter</h5>
      <p class="fw-normal">
        Nigeria, having fulfilled all the requirement to establish a chapter to
        operationalize the Triple Helix Model, is the latest addition to the
        league Triple Helix Chapter under the African region.
      </p>
      <div class="icons">
        <a href="#"><i class="bi bi-facebook"></i></a>
        <a href="#"> <i class="bi bi-twitter"></i></a>
        <a href="#"> <i class="bi bi-linkedin"></i></a>
        <a href="#"> <i class="bi bi-github"></i></a>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  height: 28rem;
  width: 100%;
  background-color: #2b352ff8;
  color: #fff;
  padding: 1rem;
  padding-top: 2rem;
  display: flex;
  justify-content: space-around;
}

.section__1 {
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
}
.section__2 {
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
}
.section__2 h5 {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.icons .bi {
  font-size: 1.25rem;
  color: #fff;
  margin: 1rem;
}

.address,
.phone,
.mail {
  margin: 1rem;
}
@media screen and (max-width: 530px) {
  .footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
