export const appConfig = {
    baseUrl: 'http://localhost:5000',
    baseAppTitle: 'Asteroid App'
}

export const apiServicesUrls = {
    getAsteroids: (startDate: string, endDate: string) => {
        return `/api/asteroids?start_date=${startDate}&end_date=${endDate}`
    }
}