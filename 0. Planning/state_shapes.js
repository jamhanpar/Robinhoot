{
    entities: {
        users: {
            1: {
                id: 1,
                username: "helloworld",
                imgUrl: null               // (to PM: this indicates default picture to be used on frontend)
            },
            
            2: {
                id: 2,
                username: "worldhello",
            }
        },
        stocks: {

        },
    },

    ui: {
        // if you need to load anything
        loading: true/false,
        // if you need a popup form that covers up the entire page (sign up forms)
        modal: true/false,
        // if you have any videos or music playing
        currentMedia: "",
    },

    errors: {
        // one error slice (aka login: [""]) per page
        // multiple errors should be in 1 array
        login: ["Incorrect username/password combination"],
        chirpForm: ["Chirp body cannot be blank"],
    },

    session: { currentUserId: 1 }
}