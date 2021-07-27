<template>
  <li>
    <h2>{{ name }} {{ this.isFavorite? '(Favorite)' : ''}}</h2>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
    <button @click="deleteFriend">Delete</button>
  </li>
</template>

<script>
export default {
  // Declaration of the list of properties.
  // They are available both on javascript and on templates
  // props: [
  //   'name',
  //   'phoneNumber',
  //   'emailAddress',
  //   'isFavorite'
  // ],
  props: {
    id: {
      type: String,
      required: true
    },
    // Normal validation
    name: String,
    // Better validation
    phoneNumber: {
      type: String,
      required: true
    },
    // Validation with methods
    emailAddress: String,
        // Validation with validator method
    isFavorite: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  // emits: ['toggle-favorite'],
  emits: {
    'toggle-favorite': function(id) {
      if (id) {
        return true;
      } else {
        console.warn("ID is missing");
        return false;
      }
    },
    'delete': function(id) {
      if (id){
        return true
      } else {
        console.warn("Id is missing");
        return false;
      }
    }
  },
  data() {
    return {
      detailsAreVisible: false,
      // friend: {
      //   id: "manuel",
      //   name: "Manuel Lorenz",
      //   phone: "0123 45678 90",
      //   email: "manuel@localhost.com",
      // },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.$emit('toggle-favorite', this.id);
    },
    deleteFriend() {
      this.$emit('delete', this.id);
    }
  }
};
</script>