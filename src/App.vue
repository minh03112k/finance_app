<template>
  <v-app>
    <!-- Navigation Header -->
    <header class="header">
      <!-- <nav>
        <RouterLink to="/" class="logo">
          <img src="./assets/vue.svg" alt="Logo" />
        </RouterLink>
        
        <div class="nav-links">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/dashboard">Dashboard</RouterLink>
          <RouterLink to="/profile">Profile</RouterLink>
        </div> -->

      <!-- Example of conditional rendering for auth -->
      <!-- <div class="auth-buttons">
          <template v-if="isAuthenticated">
            <span>Welcome, {{ user?.name }}</span>
            <button @click="handleLogout">Logout</button>
          </template>
<template v-else>
            <RouterLink to="/login" class="login-btn">Login</RouterLink>
            <RouterLink to="/register" class="register-btn">Register</RouterLink>
          </template>
</div>
</nav> -->
    </header>

    <!-- Main Content Area -->
    <main class="main-content">
      <!-- Loading indicator -->
      <!-- <div v-if="isLoading" class="loading">
        Loading...
      </div> -->

      <!-- Router View with transition -->
      <RouterView v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <!-- <p>&copy; {{ currentYear }} Your App Name. All rights reserved.</p> -->
      <v-bottom-navigation :elevation="6" density="compact">
        <v-btn value="home">
          <!-- <v-icon>mdi-history</v-icon> -->
          <span>home</span>
        </v-btn>

        <v-btn value="favorites">
          <!-- <v-icon>mdi-heart</v-icon> -->
          <span>Favorites</span>
        </v-btn>

        <v-btn value="list">
          <!-- <v-icon>mdi-map-marker</v-icon> -->
          <span>list</span>
        </v-btn>
        <v-btn value="cart">
          <!-- <v-icon>mdi-map-marker</v-icon> -->
          <span>cart</span>
        </v-btn>
        <v-btn value="profile">
          <!-- <v-icon>mdi-map-marker</v-icon> -->
          <span>profile</span>
        </v-btn>
      </v-bottom-navigation>
    </footer>
  </v-app>
</template>

<script setup lang="ts">
// import { ref, computed, onMounted } from 'vue'
// import { RouterLink, RouterView, useRouter } from 'vue-router'
import { RouterView } from 'vue-router'

// Types
// interface User {
//   id: number
//   name: string
//   email: string
// }

// State
// const isLoading = ref(false)
// const user = ref<User | null>(null)
// const router = useRouter()

// Computed
// const isAuthenticated = computed(() => !!user.value)
// const currentYear = computed(() => new Date().getFullYear())

// // Methods
// const handleLogout = async () => {
//   try {
//     isLoading.value = true
//     // Add your logout logic here
//     await logout()
//     user.value = null
//     router.push('/login')
//   } catch (error) {
//     console.error('Logout failed:', error)
//   } finally {
//     isLoading.value = false
//   }
// }

// Mock logout function - replace with your actual auth service
// const logout = async () => {
//   // Simulate API call
//   await new Promise(resolve => setTimeout(resolve, 500))
//   localStorage.removeItem('token')
// }

// Lifecycle hooks
// onMounted(async () => {
//   // Example: Check authentication status on mount
//   const token = localStorage.getItem('token')
//   if (token) {
//     // Add your user fetch logic here
//     // user.value = await fetchUserProfile()
//   }
// })
</script>

<style scoped>
.loading {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* Transition animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>