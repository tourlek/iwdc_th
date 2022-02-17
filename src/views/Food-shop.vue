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
          :img-src="require('../assets/images/foodshop.jpg')"
        ></b-carousel-slide>
      </b-carousel>
    </div>
    <div>
      <b-card no-body>
        <b-tabs card vertical nav-wrapper-class="w-25">
          <b-tab title="Curry bread" active>
            <b-row>
              <b-col>
                <img
                  src="../assets/images/at shop/curry bread1.jpg"
                  width="100%"
                  alt=""
                />
              </b-col>
              <b-col class="text-left">
                <h1>Curry bread</h1>
                <p>Wrap the curry in bread to deep-fry in oil.</p>
                <h6 class="text-secondary">Difficulty in finding: 0/10</h6>
                <h4>Place to buy</h4>
                <ul>
                  <li>Bakery</li>
                  <li>Convenience store</li>
                  <li>Super mar</li>
                  <li>Super market</li>
                </ul>
                <div class="svg-image">
                  <img
                    src="../assets/images/drawing/at shop/curry bread.svg"
                    width="100%"
                    alt=""
                  />
                </div>
              </b-col>
            </b-row>
          </b-tab>
          <b-tab title="Sushi">
            <b-row>
              <b-col>
                <img
                  src="../assets/images/at shop/sushi.jpg"
                  width="100%"
                  height="auto"
                  alt=""
                />
              </b-col>
              <b-col class="text-left">
                <h2>Sushi</h2>
                <p>
                  Sushi is a traditional Japanese dish. Sushi is vinegared rice
                  topped with (a slice of) fish, meat, or vegetables. Vinegared
                  rice for sushi is called “sumeshi” or “syari” in Japanese. You
                  can enjoy a wide variety of sushi like nigiri, maki, and
                  chirashi in Japan. Nigiri is a bite-sized vinegared rice ball
                  with a slice of raw fish, like tuna or salmon, or shellfish,
                  on top. Gunkan means “warship” in English. Gunkan-maki was so
                  named because it looks like a warship. Maki-zushi (rolled
                  sushi) is a type of sushi whose ingredients are rolled in a
                  sheet of nori (dried seaweed) into the shape of a tube.
                </p>
                <h6 class="text-secondary">Difficulty in finding: 0/10</h6>
                <h4>Place to buy</h4>
                <ul>
                  <li>sushi shop</li>
                  <li>convenience store</li>
                  <li>super mar</li>
                  <li>supermarket</li>
                </ul>
              </b-col>
           
            </b-row>
            <b-row>
              <b-col>
                   <div class="svg-image2">
                  <img
                    src="../assets/images/drawing/at shop/sushi.svg"
                    width="100%"
                    alt=""
                  />
                </div>
              </b-col>
            </b-row>
          </b-tab>
          <b-tab title="Ichigo daifuku(Strawberry Daifuku)">
            <b-row>
              <b-col>
                <img
                  src="../assets/images/at shop/daifuku1.jpg"
                  width="100%"
                  height="auto"
                  alt=""
                />
              </b-col>
              <b-col class="text-left">
                <h2>Ichigo daifuku(Strawberry Daifuku)</h2>
                <p>
                  rice cake stuffed with red bean paste and a whole strawberry
                </p>
                <h6 class="text-secondary">Difficulty in finding: 0/10</h6>
                <h4>Place to buy</h4>
                <ul>
                  <li>Japanese-style confectionary store</li>
                  <li>convenience store</li>
                  <li>super mar</li>
                  <li>supermarket</li>
                </ul>
                <div class="svg-image2" style="bottom:-50px;">
                  <img
                    src="../assets/images/drawing/at shop/difuku.svg"
                    width="100%"
                    alt=""
                  />
                </div>
              </b-col>
            </b-row>
          </b-tab>
          <b-tab title="Yakisoba sandwich">
            <b-row>
              <b-col>
                <img
                  src="../assets/images/at shop/yakisoba1.jpg"
                  width="100%"
                  height="auto"
                  alt=""
                />
              </b-col>
              <b-col class="text-left">
                <h2>Yakisoba sandwich</h2>
                <p>Yakisoba noodles sandwiched between two pieces of bread.</p>
                <h6 class="text-secondary">Difficulty in finding: 0/10</h6>
                <h4>Place to buy</h4>
                <ul>
                  <li>bakery</li>
                  <li>convenience store</li>
                  <li>super mar</li>
                  <li>supermarket</li>
                </ul>
                <div class="svg-image2" style="bottom:-50px;">
                  <img
                    src="../assets/images/drawing/at shop/yakisoba sanwich.svg"
                    width="100%"
                    alt=""
                  />
                </div>
              </b-col>
            </b-row>
          </b-tab>
          <b-tab title="Crepe">
            <b-row>
              <b-col>
                <img
                  src="../assets/images/at shop/crepe1.jpg"
                  width="100%"
                  height="auto"
                  alt=""
                />
              </b-col>
              <b-col class="text-left">
                <h2>Crepe</h2>
                <p>Thinly baked pancake batter, topped with fruit or cream.</p>
                <h6 class="text-secondary">Difficulty in finding: 0/10</h6>
                <h4>Place to buy</h4>
                <ul>
                  <li>crepe shop</li>
                  <li>cafe</li>
                  <li>convenience store</li>
                  <li>super mar</li>
                  <li>supermarket</li>
                </ul>
                <div class="svg-image2" style="bottom:-50px;">
                  <img
                    src="../assets/images/drawing/at shop/crepe.svg"
                    width="100%"
                    alt=""
                  />
                </div>
              </b-col>
            </b-row>
            
          </b-tab>
          <b-tab title="Dorayaki">
            <b-row>
              <b-col>
                <img
                  src="../assets/images/at shop/dorayaki.jpg"
                  width="100%"
                  height="auto"
                  alt=""
                />
              </b-col>
              <b-col class="text-left">
                <h2>Dorayaki</h2>
                <p>Pancakes with red bean paste in between.</p>
                <h6 class="text-secondary">Difficulty in finding: 0/10</h6>
                <h4>Place to buy</h4>
                <ul>
                  <li>Japanese-style confectionary store</li>
                  <li>Convenience store</li>
                  <li>Super mar</li>
                  <li>Super market</li>
                </ul>
                <div class="svg-image2" style="bottom:-50px;">
                  <img
                    src="../assets/images/drawing/at shop/dorayaki.svg"
                    width="100%"
                    alt=""
                  />
                </div>
              </b-col>
            </b-row>
          </b-tab>
          <b-tab title="Oden">
            <b-row>
              <b-col>
                <img
                  src="../assets/images/at shop/oden.jpg"
                  width="100%"
                  height="auto"
                  alt=""
                />
              </b-col>
              <b-col class="text-left">
                <h2>Oden</h2>
                <p>
                  Oden is a type of Japanese stew. Oden soup is made from soy
                  sauce, seasonings and soup stock.Oden soup stock is generally
                  made from bonito flakes and seaweed. Ingredients for oden
                  include Konjac, boiled eggs and Japanese radish.
                </p>
                <h6 class="text-secondary">Difficulty in finding: 0/10</h6>
                <h4>Place to buy</h4>
                <ul>
                  <li>Oden stall</li>
                  <li>Tavern</li>
                  <li>Convenience store</li>
                  <li>Super mar</li>
                  <li>Super market</li>
                </ul>
                <div class="svg-image2" style="bottom:-50px;">
                  <img
                    src="../assets/images/drawing/at shop/oden.svg"
                    width="100%"
                    alt=""
                  />
                </div>
              </b-col>
            </b-row>
          </b-tab>
          <b-tab title="Dango">
            <b-row>
              <b-col>
                <img
                  src="../assets/images/at shop/dango1.jpg"
                  width="100%"
                  height="auto"
                  alt=""
                />
              </b-col>
              <b-col class="text-left">
                <h2>Dango</h2>
                <p>Stick the mochi on a skewer and put the bean paste on it.</p>
                <h6 class="text-secondary">Difficulty in finding: 0/10</h6>
                <h4>Place to buy</h4>
                <ul>
                  <li>Convenience store</li>
                  <li>Super market</li>
                  <li>Privately owned store</li>
                </ul>
                <div class="svg-image2" style="bottom:-50px;">
                  <img
                    src="../assets/images/drawing/at shop/dango.svg"
                    width="100%"
                    alt=""
                  />
                </div>
              </b-col>
            </b-row>
          </b-tab>
          <b-tab title="Sapporo beer">
            <b-row>
              <b-col>
                <img
                  src="../assets/images/at shop/sappore.jpg"
                  width="100%"
                  height="auto"
                  alt=""
                />
              </b-col>
              <b-col class="text-left">
                <h2>Sapporo beer</h2>
                <p>Hokkaido beer</p>
                <h6 class="text-secondary">Difficulty in finding: 0/10</h6>
                <h4>Place to buy</h4>
                <ul>
                  <li>Convenience store</li>
                  <li>Super market</li>
                </ul>
                <div class="svg-image2" style="bottom:-50px;">
                  <img
                    src="../assets/images/drawing/at shop/sapporo.svg"
                    width="100%"
                    alt=""
                  />
                </div>
              </b-col>
            </b-row>
          </b-tab>
          <b-tab title="Chawanmushi">
            <b-row>
              <b-col>
                <img
                  src="../assets/images/at shop/Chawanmush1.jpg"
                  width="100%"
                  height="auto"
                  alt=""
                />
              </b-col>
              <b-col class="text-left">
                <h2>Chawanmushi</h2>
                <p>
                  Chawanmushi is a custard-like dish containing shrimp, chicken,
                  mushrooms, vegetables, fish cake etc., steamed in a cup.
                </p>
                <h6 class="text-secondary">Difficulty in finding: 0/10</h6>
                <h4>Place to buy</h4>
                <ul>
                  <li>Sushi shop</li>
                  <li>Convenience store</li>
                  <li>Super mar</li>
                  <li>Super market</li>
                </ul>
                <div class="svg-image2" style="bottom:-50px;">
                  <img
                    src="../assets/images/drawing/at shop/chawanmushi.svg"
                    width="100%"
                    alt=""
                  />
                </div>
              </b-col>
            </b-row>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.svg-image {
  position: relative;
}
.svg-image2 {
  bottom: 0px;
  right: 0px;
  position: absolute;
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
  }
}
</style>
