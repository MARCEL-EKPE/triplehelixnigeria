<template>
  <div>
    <Nav />
    <div class="contact__bg">
      <div class="box__div">
        <div class="box address">
          <i class="bi bi-geo-alt-fill p-1" style="font-size: 2.5rem"></i>
          <p class="text-center">
            Fidel Avenue <br />
            <span>Port-Harcourt, Nigeria</span>
          </p>
        </div>

        <div class="box linkedin pb-4">
          <i class="bi bi-linkedin" style="font-size: 2.5rem"></i>
          <div>
            <a href="#" class="text-decoration-none ps-2 fw-bold text-info"
              >triplhelixnigeria</a
            >
          </div>
        </div>

        <div class="box email pb-4">
          <i class="bi bi-envelope-fill" style="font-size: 2.5rem"></i>
          <div>
            <a href="#" class="text-decoration-none ps-2 fw-bold text-info"
              >@t-h-anigeria.com</a
            >
          </div>
        </div>

        <div class="box phone pb-4">
          <i class="bi bi-telephone-fill p-1" style="font-size: 2.5rem"></i>
          <h5 class="fw-bold">+2347039631235</h5>
        </div>
      </div>
      <div class="form__div">
        <h4 class="display-5 fw-bold text-center mt-5 text-success">
          Contact Us
        </h4>
        <form>
          <div class="form-group">
            <input
              type="email"
              class="form-control"
              placeholder="Enter your name"
            />
          </div>

          <div class="form-group">
            <input
              type="password"
              class="form-control"
              placeholder="Enter your address"
            />
          </div>

          <div class="form-group">
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <button class="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import Nav from "../components/Nav.vue";
</script>

<style scoped>
.contact__bg {
  height: 100%;
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}
.box__div {
  height: 100%;
  width: 50rem;
  margin-top: 3rem;
  display: flex;
  justify-content: space-around;
}
.box__div .box {
  height: 160px;
  width: 180px;
  color: #fff;
  background-color: #33865d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 3;
}
.box__div .box:hover {
  cursor: pointer;
}

.form__div {
  width: 40rem;
  height: 30rem;
  background-color: #94bca3;
  margin-top: -2rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
form {
  padding: 2rem;
  width: 100%;
  height: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
form input {
  width: 30rem;
}
form textarea {
  width: 30rem;
}
</style>
