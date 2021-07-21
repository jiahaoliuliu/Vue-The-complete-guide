// Method to be used inside javascript and not in the HTML
function getRandomAttackValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100
        }
    },
    methods: {
        attackMonster() {
            console.log("Attacking the monster");
            const attackValue = getRandomAttackValue(5, 12);
            console.log("The attack value is " + attackValue);
            this.monsterHealth -= attackValue;
            console.log("The new monster health is " + this.monsterHealth);
            this.attachPlayer();
        },
        attachPlayer() {
            const attackValue = getRandomAttackValue(8, 15);
            this.playerHealth -= attackValue;
        }
    }
});

app.mount('#game');