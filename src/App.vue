<template>
  <div class="app">
    <!-- Navigation Header -->
    <header class="header">
      <nav>
        <RouterLink to="/" class="logo">
          <img src="./assets/vue.svg" alt="Logo" />
        </RouterLink>
        
        <div class="nav-links">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/dashboard">Dashboard</RouterLink>
          <RouterLink to="/profile">Profile</RouterLink>
        </div>

        <!-- Example of conditional rendering for auth -->
        <div class="auth-buttons">
          <template v-if="isAuthenticated">
            <span>Welcome, {{ user?.name }}</span>
            <button @click="handleLogout">Logout</button>
          </template>
          <template v-else>
            <RouterLink to="/login" class="login-btn">Login</RouterLink>
            <RouterLink to="/register" class="register-btn">Register</RouterLink>
          </template>
        </div>
      </nav>
    </header>

    <!-- Main Content Area -->
    <main class="main-content">
      <!-- Loading indicator -->
      <div v-if="isLoading" class="loading">
        Loading...
      </div>
      
      <!-- Router View with transition -->
      <RouterView v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <p>&copy; {{ currentYear }} Your App Name. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { RouterLink, RouterView, useRouter } from 'vue-router'

// Types
interface User {
  id: number
  name: string
  email: string
}

// State
const isLoading = ref(false)
const user = ref<User | null>(null)
const router = useRouter()

// Computed
const isAuthenticated = computed(() => !!user.value)
const currentYear = computed(() => new Date().getFullYear())

// Methods
const handleLogout = async () => {
  try {
    isLoading.value = true
    // Add your logout logic here
    await logout()
    user.value = null
    router.push('/login')
  } catch (error) {
    console.error('Logout failed:', error)
  } finally {
    isLoading.value = false
  }
}

// Mock logout function - replace with your actual auth service
const logout = async () => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 500))
  localStorage.removeItem('token')
}

// Lifecycle hooks
onMounted(async () => {
  // Example: Check authentication status on mount
  const token = localStorage.getItem('token')
  if (token) {
    // Add your user fetch logic here
    // user.value = await fetchUserProfile()
  }
})
</script>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
}

.header nav {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo img {
  height: 2rem;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-links a {
  text-decoration: none;
  color: #333;
}

.nav-links a.router-link-active {
  color: #42b883;
  font-weight: bold;
}

.main-content {
  flex: 1;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.footer {
  background: #f8f9fa;
  padding: 1rem;
  text-align: center;
}

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