const app = Vue.createApp({
    data() {
        return {
            firstName: "John",
            lastName: "Doe",
            email: "john@email.com",
            gender: "male",
            picture: "https://randomuser.me/api/portraits/men/10.jpg"
        }
    },
    methods: {
        async getUser() {
            const url = "https://randomuser.me/api"
            const req = await fetch(url)
            const { results } = await req.json()

            console.log(results)

            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.large
        }
    }
})

app.mount("#app");