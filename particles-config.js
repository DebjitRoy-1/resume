particlesJS('particles-js', {
  "particles": {
      "number": {
          "value": 100, // Increased for a denser effect
          "density": {
              "enable": true,
              "value_area": 800
          }
      },
      "color": {
          "value": "#000000" // Black particles
      },
      "shape": {
          "type": "circle",
          "stroke": {
              "width": 0,
              "color": "#000000"
          }
      },
      "opacity": {
          "value": 0.5,
          "random": true,
          "anim": {
              "enable": true,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
          }
      },
      "size": {
          "value": 5,
          "random": true,
          "anim": {
              "enable": true,
              "speed": 10,
              "size_min": 0.1,
              "sync": false
          }
      },
      "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#000000",
          "opacity": 0.4,
          "width": 1
      },
      "move": {
          "enable": true,
          "speed": 3,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false
      }
  },
  "interactivity": {
      "detect_on": "canvas",
      "events": {
          "onhover": {
              "enable": true,
              "mode": "repulse"
          },
          "onclick": {
              "enable": true,
              "mode": "push"
          },
          "resize": true
      },
      "modes": {
          "grab": {
              "distance": 800,
              "line_linked": {
                  "opacity": 1
              }
          },
          "bubble": {
              "distance": 800,
              "size": 80,
              "duration": 2,
              "opacity": 0.8,
              "speed": 3
          },
          "repulse": {
              "distance": 400,
              "duration": 0.4
          },
          "push": {
              "particles_nb": 4
          },
          "remove": {
              "particles_nb": 2
          }
      }
  },
  "retina_detect": true,
  "config_demo": {
      "hide_card": false,
      "background_color": "#000000",
      "background_image": "",
      "background_repeat": "no-repeat",
      "background_size": "cover"
  }
});
