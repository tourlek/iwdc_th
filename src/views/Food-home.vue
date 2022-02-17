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
          :img-src="require('../assets/images/foodhome.jpg')"
        ></b-carousel-slide>
      </b-carousel>
    </div>
    <div>
      <b-card no-body>
        <b-tabs card vertical nav-wrapper-class="w-25">
          <b-tab title="Choco Banana" active>
            <b-row>
              <b-col>
                <img
                  src="../assets/images/at_home/coco_banana.jpg"
                  width="100%"
                  alt=""
                />
              </b-col>
              <b-col class="text-left">
                <h1>Choco Banana</h1>
                <p>
                  It is a banana coated with chocolate. And it is also topped
                  with colorful sweet sugar.
                </p>
                <h6 class="text-secondary">Difficulty in making: 4/10</h6>
                <h4>Ingradients</h4>
                <ul>
                  <li>banana</li>
                  <li>chocolate</li>
                  <li>colorspray (Colorful sweet sugar)</li>
                </ul>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <div>
                  <div class="text-left mt-2">
                    <h3>Cooking Step</h3>
                  </div>
                  <ol class="text-left">
                    <li>Peel the banana and stab it with a stick.</li>
                    <li>Boil the chocolate in hot water to melt it.</li>
                    <li>Soak the banana in the melted chocolate.</li>
                    <li>
                      Top with a color spray before the chocolate hardens.
                    </li>
                    <li>Keep it in the fridge and you're done.</li>
                  </ol>
                </div>
              </b-col>
              <b-col>
                <div class="svg-image">
                  <img
                    src="../assets/images/drawing/at home/choco banana.svg"
                    width="100%"
                    alt=""
                  />
                </div>
              </b-col>
            </b-row>
          </b-tab>
          <b-tab title="Furutsuponchi(Fruit punch)">
            <b-row>
              <b-col>
                <img
                  src="../assets/images/at_home/furutsuponchi.jpg"
                  width="100%"
                  height="auto"
                  alt=""
                />
              </b-col>
              <b-col class="text-left">
                <h2>Furutsuponchi <br />(Fruit punch)</h2>
                <p>A sweet dessert that combines fruit and cider.</p>
                <h6 class="text-secondary">Difficulty in making: 2/10</h6>
                <h4>Ingradients</h4>
                <ul>
                  <li>some fruits</li>
                  <li>cider (this time we use MITSUYA cider)</li>
                  <li>siroop or sugar</li>
                </ul>
                <div class="text-left mt-2">
                  <h3>Cooking Step</h3>
                </div>
                <ol class="text-left">
                  <li>Cut some kinds of fruit.</li>
                  <li>Serve on a plate.</li>
                  <li>Sprinkle an appropriate amount of cider.</li>
                  <li>Sweeten with syrup or sugar to complete.</li>
                </ol>
              </b-col>
              <b-col>
                <div class="svg-image">
                  <img
                    src="../assets/images/drawing/at home/furutsuponchi.svg"
                    width="100%"
                    alt=""
                  />
                </div>
              </b-col>
            </b-row>
          </b-tab>
          <b-tab title="Hokkaido White Curry">
            <b-row>
              <b-col>
                <img
                  src="../assets/images/at_home/hokkaido write curry.jpg"
                  width="100%"
                  height="auto"
                  alt=""
                />
              </b-col>
              <b-col class="text-left">
                <h2>Hokkaido White Curry</h2>
                <p>A whitish curry that originated in Hokkaido.</p>
                <h6 class="text-secondary">Difficulty in making: 8/10</h6>
                <h4>Ingradients</h4>
                <ul>
                  <li>meat</li>
                  <li>carrot</li>
                  <li>onion</li>
                  <li>potato</li>
                  <li>white carry roux</li>
                  <li>woter</li>
                  <li>some spice</li>
                  <li>milk</li>
                  <li>rises</li>
                </ul>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <div class="text-left mt-2">
                  <h3>Cooking Step</h3>
                </div>
                <ol class="text-left">
                  <li>Cut meat, carrot, onion, and potato</li>
                  <li>
                    Fry the meat, carrots, potatoes and onions in this order.
                  </li>
                  <li>Once these are cooked, add water and simmer.</li>
                  <li>
                    When it boils, turn off the heat and add roux to melt.
                  </li>
                  <li>put in some milk.</li>
                  <li>Turn on the heat again and simmer for a few minutes.</li>
                  <li>
                    After boiling for a few minutes, add spices as needed.
                  </li>
                </ol>
              </b-col>
              <b-col>
                <div class="svg-image">
                  <img
                    src="../assets/images/drawing/at home/hokkaido white curry.svg"
                    width="100%"
                    alt=""
                  />
                </div>
              </b-col>
            </b-row>
          </b-tab>
          <b-tab title="Tamagoyaki">
            <b-row>
              <b-col>
                <img
                  src="../assets/images/at_home/tamagoyaki.jpg"
                  width="100%"
                  height="auto"
                  alt=""
                />
              </b-col>
              <b-col class="text-left">
                <h2>Tamagoyaki</h2>
                <p>
                  A dish in which chicken eggs are stirred, seasoned with
                  seasonings and soup stock, and baked.
                </p>
                <h6 class="text-secondary">Difficulty in making: 2/10</h6>
                <h4>Ingradients</h4>
                <ul>
                  <li>Egg (medium size) 3 ea.</li>
                  <li>(A) Sugar 1 tsp</li>
                  <li>(A) Light soy sauce 1 tsp</li>
                  <li>(A) Salt Two knobs</li>
                  <li>Salad oil 1 tsp</li>
                </ul>
                <h6 class="text-secondary">
                  Reference site: https://bit.ly/3rTVhUQ
                </h6>
              </b-col>
            </b-row>
            <div class="text-left mt-2">
              <h3>Cooking Step</h3>
            </div>
            <ol class="text-left">
              <li>
                Break the egg into a bowl, chop the white meat with chopsticks,
                beat it, add (A) and mix.
              </li>
              <li>
                Heat a frying pan for fried eggs over medium heat, grind salad
                oil, and wipe off excess oil with kitchen paper..
              </li>
              <li>
                Pour 1/4 of the amount of 1 and bake on medium heat. When it is
                half-ripened, roll it from the back to the front and move it to
                the back. Repeat 3 times in the same way, and when it is cooked,
                remove it from the heat.
              </li>
              <li>
                Place 3 on the makisu and wrap it to shape it. Cut it into
                pieces that are easy to eat, and serve them on a plate with
                perilla leaves.
              </li>
            </ol>
            <div class="svg-image2">
              <img
                src="../assets/images/drawing/at home/tamagoyaki.svg"
                width="100%"
                alt=""
              />
            </div>
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
  bottom: 10px;
  position: sticky;
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
