<template>
  <div class="button-container">
    <div id="lineDrawing">
      <svg viewBox="0 0 792 512">
        <g class="lines">
          <path
            class="my-path"
            d="M296.7,240.8l-11.4,92.1h-20.7l4.9-39.2h-33.2l-4.9,39.2h-20.7l11.4-92.1h20.7l-4.8,38.9h33.2l4.8-38.9H296.7z"
          />
          <!-- Les autres chemins SVG -->
        </g>
      </svg>
    </div>
    <button @click="startGame">PLAY GAME</button>
    <audio ref="gameSound" src="@/assets/larbin.mp3"></audio> <!-- Audio intégré -->
  </div>
</template>

<script>
import anime from "animejs";


export default {
  mounted() {
    // Lance l'animation de dessin de ligne
    anime({
      targets: "#lineDrawing .lines path",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 3000,
      delay: (el, i) => i * 250,
      direction: "alternate",
      loop: true,
    });
  },
  methods: {
    startGame() {
      // Utiliser require pour charger le fichier audio sans import inutile
      const audio = new Audio(require('@/assets/larbin.mp3'));
      audio.play().catch(error => console.error("Erreur de lecture audio :", error));

      anime({
        targets: ".button-container",
        backgroundColor: ['#222', '#111'],
        duration: 500,
        easing: "easeInOutQuad",
        complete: () => {
          this.$router.push("/game"); // Redirection après l'animation
        },
      });
    },
  },
};

</script>

<style scoped>
/* Contexte général pour le bouton avec animation */
.button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #222;
}

/* Style pour le SVG avec lignes animées */
#lineDrawing {
  margin-bottom: 1rem;
}

.my-path {
  fill: none;
  stroke: #cfc33a;
  stroke-width: 4;
}

/* Style du bouton principal */
button {
  padding: 1rem 2rem;
  font-size: 1.5rem;
  color: #ffd700;
  background-color: #333;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: transform 0.2s ease, background-color 0.2s ease;
}

button:hover {
  background-color: #444;
  transform: scale(1.05);
}
</style>
