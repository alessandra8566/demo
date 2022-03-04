<template>
  <div class="hero-second-scene__circle-graphics">
    <div style="pointer-events: auto;position: relative;">
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px" y="0px" viewBox="0 0 510 510" xml:space="preserve">
        <g class="label" test="0.699250806478375 0.714876429629165">
          <path id="label-path" d="M 33.7007632586706 187.50689580683 A 235,235 0 0,1 255 29"></path>
          <path id="arrow-path" d="M 255 20 A 235,235 0 0,1 255 490 A 235,235 0 0,1 28.007430822069 194.177524400908">
          </path>
          <path id="marker-path" d="M0, -0.6, L1, 0 L0, 0.6 Z" fill="transparent" stroke="none"
            transform="matrix(0.02588,-0.09659,0.09659,0.02588,28.00355,194.23477)" vector-effect="non-scaling-stroke"
            data-svg-origin="0.5 0" style="transform-origin: 0px 0px;"></path>
          <text>
            <textPath href="#label-path" startOffset="50%">
              Lost to Found
            </textPath>
          </text>
        </g>
        <g class="links">
          <g class="link" :class="{'active': svgSelect == 'Survival' }" @click="onClick('Survival')">
            <path class="background default"
              d="M 103.734079012938 102.213805767877 A 215,215 0 0,1 406.265920987062 102.213805767877 L 364.052175595324 144.851813460563 A 155,155 0 0,0 145.947824404676 144.851813460563">
            </path>
            <path class="background active" fill="#f15a29"
              d="M 103.734079012938 102.213805767877 A 215,215 0 0,1 406.265920987062 102.213805767877 L 364.052175595324 144.851813460563 A 155,155 0 0,0 145.947824404676 144.851813460563">
            </path>
            <path id="item-0" class="text-arc"
              d="M 129.062326247981 127.796610383489 A 179,179 0 0,1 380.937673752019 127.796610383489"></path>
            <text>
              <textPath href="#item-0" startOffset="50%">
                Survival
              </textPath>
            </text>
          </g>
          <g class="link" :class="{'active': svgSelect == 'Stabilization' }" @click="onClick('Stabilization')">
            <path class="background default"
              d="M 407.786194232123 103.734079012938 A 215,215 0 0,1 407.786194232123 406.265920987062 L 365.148186539437 364.052175595324 A 155,155 0 0,0 365.148186539437 145.947824404676">
            </path>
            <path class="background active" fill="#f15a29"
              d="M 407.786194232123 103.734079012938 A 215,215 0 0,1 407.786194232123 406.265920987062 L 365.148186539437 364.052175595324 A 155,155 0 0,0 365.148186539437 145.947824404676">
            </path>
            <path id="item-1" class="text-arc"
              d="M 382.203389616511 129.062326247981 A 179,179 0 0,1 382.203389616511 380.937673752019"></path>
            <text>
              <textPath href="#item-1" startOffset="50%">
                Stabilization
              </textPath>
            </text>
          </g>
          <g class="link" :class="{'active': svgSelect == 'Recovery' }" @click="onClick('Recovery')">
            <path class="background default"
              d="M 406.265920987062 407.786194232123 A 215,215 0 0,1 103.734079012938 407.786194232123 L 145.947824404676 365.148186539437 A 155,155 0 0,0 364.052175595324 365.148186539437">
            </path>
            <path class="background active" fill="#f15a29"
              d="M 406.265920987062 407.786194232123 A 215,215 0 0,1 103.734079012938 407.786194232123 L 145.947824404676 365.148186539437 A 155,155 0 0,0 364.052175595324 365.148186539437">
            </path>
            <path id="item-2" class="text-arc"
              d="M 380.937673752019 382.203389616511 A 179,179 0 0,1 129.062326247981 382.203389616511"></path>
            <text>
              <textPath href="#item-2" startOffset="50%">
                Recovery
              </textPath>
            </text>
          </g>
          <g class="link " :class="{'active': svgSelect == 'Post Graduation' }" @click="onClick('Post Graduation')">
            <path class="background default"
              d="M 102.213805767877 406.265920987062 A 215,215 0 0,1 102.213805767877 103.734079012938 L 144.851813460563 145.947824404676 A 155,155 0 0,0 144.851813460563 364.052175595324">
            </path>
            <path class="background active" fill="#f15a29"
              d="M 102.213805767877 406.265920987062 A 215,215 0 0,1 102.213805767877 103.734079012938 L 144.851813460563 145.947824404676 A 155,155 0 0,0 144.851813460563 364.052175595324">
            </path>
            <path id="item-3" class="text-arc"
              d="M 127.796610383489 380.937673752019 A 179,179 0 0,1 127.796610383489 129.062326247981"></path>
            <text>
              <textPath href="#item-3" startOffset="50%">
                Post Graduation
              </textPath>
            </text>
          </g>
        </g>
      </svg>
      <div class="circle-background" style="opacity: 1; visibility: inherit;"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "LostToFound",
    data() {
      return {
        svgSelect: "Survival"
      }
    },
    methods: {
      onClick(svgType) {
        this.svgSelect = svgType
        this.$emit('svgTypeDataFn', this.svgSelect)
      }
    },
    mounted() {
      this.$emit('svgTypeDataFn', this.svgSelect)

    }
  }
</script>

<style lang="scss" scoped>
  @media only screen and (max-width: 767px) {
    .hero-second-scene__circle-graphics {
      display: none;
    }
  }

  .hero-second-scene__circle-graphics {
    width: 25vw;
    height: 25vw;

    svg {
      width: 100%;
      height: 100%;
      max-width: 100%;
      display: block;
    }

    #arrow-path {
      stroke: white;
      stroke-width: 2px;
    }

    #marker-path {
      stroke: white;
      transform-origin: 0 0;
    }

    path {
      stroke-width: 6px;
    }


    .label {
      path {
        fill: transparent;
        stroke-width: 6px;
      }

      textPath {
        font-size: 1.5rem;
        font-weight: 700;
        letter-spacing: 2px;
      }
    }

    .link.active {
      cursor: pointer;

      .background.active {
        opacity: 1;
      }
    }

    .background {
      &.default {
        fill: rgba(0, 0, 0, .5);
        opacity: 1;
      }

      &.active {
        opacity: 0;
      }
    }

    .circle-background {
      display: block;
      position: absolute;
      top: 8.4%;
      right: 8.4%;
      bottom: 8.4%;
      width: 84%;
      z-index: -1;
      border-radius: 100%;
      overflow: hidden;
      background-color: #58595b;
    }

    .text-arc {
      fill: transparent;
    }

    textPath {
      font-size: 1rem;
      font-weight: 300;
      text-anchor: middle;
      fill: white;
      text-transform: uppercase;
      font-family: 'Montserrat';
    }
  }
</style>