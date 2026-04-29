export default defineEventHandler(() => {
  return {
    message: 'Hello from the server!',
    timestamp: new Date().toISOString()
  }
})
