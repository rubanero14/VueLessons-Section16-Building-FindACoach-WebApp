export default {
    async login(context,payload){
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB8BS4h-hUr3fhB_u7IkK26xQ7kXeYufpo', {
            method: 'POST',
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true,
            })
        });
        
        const responseData = await response.json;

        if(!response.ok){
            console.log(responseData);
            const error = new Error(responseData.message || 'Failed to authenticate. Chek your login data!');
            throw error;
        }

        console.log(responseData);

        context.commit('setUser', {
            token: responseData.idToken,
            userId: responseData.localId,
            tokenExpiration: responseData.expiresIn,
        })
    },
    async signUp(context,payload){
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB8BS4h-hUr3fhB_u7IkK26xQ7kXeYufpo', {
            method: 'POST',
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true,
            })
        });

        const responseData = await response.json;

        if(!response.ok){
            console.log(responseData);
            const error = new Error(responseData.message || 'Failed to authenticate. Chek your login data!');
            throw error;
        }

        console.log(responseData);

        context.commit('setUser', {
            token: responseData.idToken,
            userId: responseData.localId,
            tokenExpiration: responseData.expiresIn,
        })
    },
}