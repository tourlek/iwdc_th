<template>
  <div>
    <div>
      <b-carousel
        id="carousel-no-animation"
        style="text-shadow: 0px 0px 2px #000"
        no-animation
        img-width="1024"
        img-height="480"
      >
        <b-carousel-slide
          :img-src="require('../assets/images/our team.jpg')"
        ></b-carousel-slide>
      </b-carousel>
    </div>
    <div class="custome-layout mt-3">
      <b-row>
        <b-col>
          <div>
            <b-card no-body class="overflow-hidden" style="max-width: 100%">
              <b-row no-gutters>
                <b-col md="6">
                  <b-card-img
                    :src="require('../assets/images/members/lek.jpg')"
                    alt="Image"
                    class="rounded-0"
                  ></b-card-img>
                </b-col>
                <b-col md="6" class="text-left">
                  <b-card-body title="Lek ~ れっく">
                    <h6 class="text-secondary">Coder</h6>
                    <p>RMUTT / iWDC / Coder</p>
                    <b-card-text>
                      I pround to exchange of cultures and learn something new
                      more as well including also getting to know new friends
                    </b-card-text>
                    <div class="svg-custom">
                      <img src="../assets/images/drawing/members/lek.png" width="100%" alt="">
                    </div>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
          </div>
        </b-col>
        <b-col>
          <div>
            <b-card no-body class="overflow-hidden" style="max-width: 100%">
              <b-row no-gutters>
                <b-col md="6">
                  <b-card-img
                    :src="require('../assets/images/members/nice.png')"
                    alt="Image"
                    class="rounded-0"
                  ></b-card-img>
                </b-col>
                <b-col md="6" class="text-left">
                  <b-card-body title="Nicezki ~ ないすず">
                    <h6 class="text-secondary">Coder</h6>
                    <p>RMUTT / iWDC / Coder</p>
                    <b-card-text style="font-size: 12.5px">
                      I like getting to know my foreign friends. Exchanged
                      cultures, talked to each other, tried to understand each
                      other. Even though we have different primary languages, we
                      can understand each other. and my Japanese friends are
                      very friendly to me
                    </b-card-text>
                    <div class="svg-custom">
                      <img src="../assets/images/drawing/members/nice.png" width="100%" alt="">
                    </div>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
          </div>
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col>
          <div>
            <b-card no-body class="overflow-hidden" style="max-width: 100%">
              <b-row no-gutters>
                <b-col md="6">
                  <b-card-img
                    :src="require('../assets/images/members/tangkwa.png')"
                    alt="Image"
                    class="rounded-0"
                  ></b-card-img>
                </b-col>
                <b-col md="6" class="text-left">
                  <b-card-body title="Boat ~ ぼーと">
                    <h6 class="text-secondary">Graphic Design</h6>
                    <p>RMUTT / iWDC / Coder</p>
                    <b-card-text>
                      I feel new friend and try to talk to foreign friends So we
                      have to communicate with each other to understand each
                      other and it's fun.
                    </b-card-text>
                    <div class="svg-custom">
                      <img src="../assets/images/drawing/members/boat.png" width="100%" alt="">
                    </div>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
          </div>
        </b-col>
        <b-col>
          <div>
            <b-card no-body class="overflow-hidden" style="max-width: 100%">
              <b-row no-gutters>
                <b-col md="6">
                  <b-card-img
                    :src="require('../assets/images/members/noom.png')"
                    alt="Image"
                    class="rounded-0"
                  ></b-card-img>
                </b-col>
                <b-col md="6" class="text-left">
                  <b-card-body title="Noom ~ のんみん">
                    <h6 class="text-secondary">Graphic Design</h6>
                    <p>RMUTT / iWDC / Coder</p>
                    <b-card-text>
                      Everyone in japan is so cute❤️Thank you for this project
                      for meeting us, i love you!!!
                    </b-card-text>
                    <div class="svg-custom">
                      <img src="../assets/images/drawing/members/noomnim.png" width="100%" alt="">
                    </div>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
          </div>
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col>
          <div>
            <b-card no-body class="overflow-hidden" style="max-width: 100%">
              <b-row no-gutters>
                <b-col md="6">
                  <b-card-img
                    :src="require('../assets/images/members/misaki.jpg')"
                    alt="Image"
                    class="rounded-0"
                  ></b-card-img>
                </b-col>
                <b-col md="6" class="text-left">
                  <b-card-body title="Misaki">
                    <h6 class="text-secondary">Designer</h6>
                    <p>HIU / iWDC</p>
                    <p class="text-secondary">
                      ผัดกระเพราหมู I like spicy food. I want to eat lots of
                      spicy food!
                    </p>
                    <b-card-text>
                      Everyone in Thailand is so kawaii~♥️ It was very proactive
                      in communicating with me and I enjoyed it.
                    </b-card-text>
                    <div class="svg-custom">
                      <img src="../assets/images/drawing/members/misaki.png" width="100%" alt="">
                    </div>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
          </div>
        </b-col>
        <b-col>
          <div>
            <b-card no-body class="overflow-hidden" style="max-width: 100%">
              <b-row no-gutters>
                <b-col md="6">
                  <b-card-img
                    :src="require('../assets/images/members/ichio.png')"
                    alt="Image"
                    class="rounded-0"
                  ></b-card-img>
                </b-col>
                <b-col md="6" class="text-left">
                  <b-card-body title="Ichino">
                    <h6 class="text-secondary">Coder</h6>
                    <p>HIU / iWDC</p>
                    <p class="text-secondary">
                      drink:「OISHI」Green Tea food Tom kha kai ต้มข่าไก่.
                    </p>

                    <b-card-text>
                      I felt the difficulty of interaction. It was a very good
                      experience.
                    </b-card-text>
                    <div class="svg-custom">
                      <img src="../assets/images/drawing/members/ichino.png" width="100%" alt="">
                    </div>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
          </div>
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col>
          <div>
            <b-card no-body class="overflow-hidden" style="max-width: 100%">
              <b-row no-gutters>
                <b-col md="6">
                  <b-card-img
                    :src="require('../assets/images/members/teru.png')"
                    alt="Image"
                    class="rounded-0"
                  ></b-card-img>
                </b-col>
                <b-col md="6" class="text-left">
                  <b-card-body title="Teru">
                    <h6 class="text-secondary">Designer</h6>
                    <p>HIU / iWDC</p>
                    <p class="text-secondary">Green curry !!.</p>
                    <b-card-text>
                      I am very happy to be able to participate this time. I'm
                      sorry I couldn't go to Thailand. But I enjoyed interacting
                      online! Someday I wanted to go to Thailand and see it.
                    </b-card-text>
                    <div class="svg-custom">
                      <img src="../assets/images/drawing/members/teru.png" width="100%" alt="">
                    </div>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
          </div>
        </b-col>
        <b-col>
          <div>
            <b-card no-body class="overflow-hidden" style="max-width: 100%">
              <b-row no-gutters>
                <b-col md="6">
                  <b-card-img
                    :src="require('../assets/images/members/yusuke.png')"
                    alt="Image"
                    class="rounded-0"
                  ></b-card-img>
                </b-col>
                <b-col md="6" class="text-left">
                  <b-card-body title="Yusuke">
                    <h6 class="text-secondary">Coder</h6>
                    <p>HIU / iWDC</p>
                    <p class="text-secondary">
                      Green curry（แกงเขียวหวาน. <br> I want to experience the
                      spiciness of Thai curry.
                    </p>
                    <b-card-text>
                      I regretted very much that I could not speak English.If I
                      could participate again next year, I would like to
                      interact with more Thai students.
                    </b-card-text>
                    <div class="svg-custom">
                      <img src="../assets/images/drawing/members/eza.png" width="100%" alt="">
                    </div>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
*{
  z-index: 1;
}
.svg-custom{
  width: 150px;
  position: absolute;
  top: -20px;
  right: 0;
  z-index: -1;
}
::v-deep {
  @import "../assets/style/custom.scss";
  @import "../../node_modules/bootstrap-vue/src/index.scss";
  a {
    color: black;
    &:hover {
      color: red !important;
      border: none !important;
    }
  }
  .card-header {
    background-color: transparent !important;
  }
  .nav-tabs .nav-link.active,
  .nav-tabs .nav-item.show .nav-link {
    width: 100%;
    border: transparent;
    color: rgb(238, 138, 138);
  }
  .custome-layout {
    height: 100%;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;
  }
}
</style>
