<template>
  <base-card>
    <base-button
      @click="setSelectedTab('stored-resources')"
      :mode="storeRedButtonMode"
      >Stored Resources</base-button
    >
    <base-button
      @click="setSelectedTab('add-resource')"
      :mode="addResButtonMode"
      >Add Resource</base-button
    >
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import StoredResources from "./StoredResources.vue";
import AddResource from "./AddResource.vue";

export default {
  components: {
    StoredResources,
    AddResource,
  },
  computed: {
    storeRedButtonMode() {
      return this.selectedTab === "stored-resources" ? null : "flat";
    },
    addResButtonMode() {
      return this.selectedTab === "add-resource" ? null : "flat";
    },
  },
  data() {
    return {
      selectedTab: "stored-resources",
      storedResources: [
        {
          id: "official-guide",
          title: "Official Guide",
          description: "The official Vue.js documentation.",
          link: "https://vuejs.org",
        },
        {
          id: "google",
          title: "Google",
          description: "Learn to google...",
          link: "https://google.com",
        },
      ],
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, description, link) {
      this.storedResources.unshift({id: new Date().toISOString(), title, description, link});
      this.selectedTab = 'stored-resources';
    },
    deleteResource(resourceId) {
      const resourceIndex = this.storedResources.findIndex(res => res.id === resourceId);
      this.storedResources.splice(resourceIndex, 1);
    }
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      deleteResource: this.deleteResource
    };
  },
};
</script>

<style scoped></style>
