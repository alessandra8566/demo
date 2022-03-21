<template>
  <div id="globeViz"></div>
</template>

<script>
  import * as THREE from 'three/build/three.module';
  import initializeDomEvents from 'threex-domevents';
  import {
    TrackballControls
  } from 'three/examples/jsm/controls/TrackballControls'
  import ThreeGlobe from 'three-globe';
  import {
    getSatellite,
    getGroundStatus
  } from '../../apiService/api'
  export default {
    name: "Home",
    data() {
      return {
        EARTH_RADIUS_KM: 12742 / 2, // 直徑 / 2
        SAT_SIZE: 250, // km
        TINE_STAMP: 3 * 1000, // per frame
        satelliteIDList: {
          '51044': null,
          '70351': null,
          '70347': null,
        },
        satellite3DObject: {},
        gsSatelliteList: {},
        gsSatellite3DObject: {},

        // three
        THREEx: {},
        tbControls: null,
        renderer: null,
        scene: null,
        camera: null,
        Globe: null,
        interaction: null
      };
    },
    methods: {
      initThree() {
        // Setup scene
        this.scene = new THREE.Scene();
        initializeDomEvents(THREE, this.THREEx)

        // Setup camera
        this.camera = new THREE.PerspectiveCamera();
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.camera.position.z = 400;

        // Setup renderer
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.getElementById('globeViz').appendChild(this.renderer.domElement);

        // click function
        this.interaction = new this.THREEx.DomEvents(this.camera, this.renderer.domElement)

        // earth
        this.Globe = new ThreeGlobe()
          .globeImageUrl('/images/earth/earth-blue-marble.jpg')
          // .bumpImageUrl('/images/earth/earth-topology.png')
          .objectLat('lat')
          .objectLng('lng')
          .objectAltitude('alt')

        // this.setSatellite3DObject()
        const satGeometry = new THREE.OctahedronGeometry(this.SAT_SIZE * this.Globe.getGlobeRadius() / this
          .EARTH_RADIUS_KM /
          2, 5);
        const satMaterial = new THREE.MeshLambertMaterial({
          color: 'palegreen',
          transparent: true,
          opacity: 0.7
        });

        this.Globe.objectThreeObject(() => new THREE.Mesh(satGeometry, satMaterial));

        // set ground
        const globeMaterial = this.Globe.globeMaterial();
        globeMaterial.bumpScale = 10;
        new THREE.TextureLoader().load('/images/earth/earth-blue-marble.png', texture => {
          globeMaterial.specularMap = texture;
          globeMaterial.specular = new THREE.Color('grey');
          globeMaterial.shininess = 100;
        });

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
        directionalLight.position.set(1, 1, 1); // change light position to see the specularMap's effect


        // add Scene
        this.scene.add(this.Globe);
        this.scene.add(new THREE.AmbientLight(0xbbbbbb));
        this.scene.add(directionalLight);



        // Add camera controls
        this.tbControls = new TrackballControls(this.camera, this.renderer.domElement);
        this.tbControls.minDistance = 101;
        this.tbControls.rotateSpeed = 10;
        this.tbControls.zoomSpeed = 0.2;



        this.animate()
        this.getSatelliteData()
      },
      // Kick-off renderer
      animate() { // IIFE
        // Frame cycle
        let _this = this;
        // satellita data 
        this.tbControls.update();
        this.renderer.render(this.scene, this.camera);
        this.Globe.objectsData(Object.keys(this.satelliteIDList).map(id => {
          let data = {
            lat: _this.satelliteIDList[id] ? Number(_this.satelliteIDList[id].satellite.sat_latitude) : 0,
            alt: _this.satelliteIDList[id] ? Number(_this.satelliteIDList[id].satellite.sat_altitude) / 10000 :
              10000,
            lng: _this.satelliteIDList[id] ? Number(_this.satelliteIDList[id].satellite.sat_longitude) : 0,
          }
          return data
        }))
        // Object.keys(this.satellite3DObject).map(id => {
        //   const longitude = _this.satelliteIDList[id] ? _this.satelliteIDList[id].satellite.sat_longitude : 0
        //   const latitude = _this.satelliteIDList[id] ? _this.satelliteIDList[id].satellite.sat_latitude : 0
        //   const altitude = _this.satelliteIDList[id] ? _this.satelliteIDList[id].satellite.sat_altitude : 0

        //   // // longitude 經度
        //   // _this.satellite3DObject[id].position.x = _this.satelliteIDList[id] ? Number(_this.satelliteIDList[id]
        //   //   .satellite.sat_longitude) : 0
        //   // // latituse 緯度
        //   // _this.satellite3DObject[id].position.y = _this.satelliteIDList[id] ? Number(_this.satelliteIDList[id]
        //   //   .satellite.sat_latitude) : 0
        //   // // altitude 高度
        //   // _this.satellite3DObject[id].position.z = _this.satelliteIDList[id] ? Number(_this.satelliteIDList[id]
        //   //   .satellite.sat_altitude) / 1000 : 0

        //   // longitude 經度
        //   _this.satellite3DObject[id].position.x = _this.EARTH_RADIUS_KM * Math.cos(latitude / 180) * Math.cos(
        //     longitude / 360)
        //   // latituse 緯度
        //   _this.satellite3DObject[id].position.y = _this.EARTH_RADIUS_KM * Math.cos(latitude / 180) * Math.sin(
        //     longitude / 360)
        //   // altitude 高度
        //   _this.satellite3DObject[id].position.z = _this.EARTH_RADIUS_KM * Math.sin(latitude / 180)
        // })

        requestAnimationFrame(this.animate);
      },
      // recurcive
      async getSatelliteData() {
        setTimeout(async () => {
          await this.asyncForEach(Object.keys(this.satelliteIDList), getSatellite)
          this.getSatelliteData()
        }, 3000)
      },
      asyncForEach(array, callback) {
        const _this = this
        return new Promise(async (resolve, reject) => {
          for (let index = 0; index < array.length; index++) {
            _this.satelliteIDList[array[index]] = await callback(array[index])
          }
          resolve()
        })
      },
      setSatellite3DObject() {
        const _this = this;
        Object.keys(_this.satelliteIDList).forEach(id => {
          const satGeometry = new THREE.OctahedronGeometry(_this.SAT_SIZE * _this.Globe.getGlobeRadius() / _this
            .EARTH_RADIUS_KM /
            2, 5);
          const satMaterial = new THREE.MeshLambertMaterial({
            color: 'green',
            transparent: true,
            opacity: 0.7
          });
          _this.satellite3DObject[id] = new THREE.Mesh(satGeometry, satMaterial)
          _this.interaction.addEventListener(_this.satellite3DObject[id], 'click', e => console.log(e))
          _this.scene.add(_this.satellite3DObject[id])
        })
      },
      async init() {
        this.gsSatelliteList = await getGroundStatus()
      }
    },
    async mounted() {
      await this.init()
      this.initThree()
    }
  };
</script>

<style lang="scss" scoped>
  .bg_image--16 {
    background-position: 50% 80% !important;
  }
</style>