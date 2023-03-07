async function createRoom() {
    // we'll add 30 min expiry (exp) so rooms won't linger too long on your account
    // we'll also turn on chat (enable_chat)
    // see other available options at https://docs.daily.co/reference#create-room
    const exp = Math.round(Date.now() / 1000) + 60 * 30;
    const options = {
        properties: {
            exp,
            enable_chat: true,
        },
    };
    // This endpoint is using the proxy as outlined in netlify.toml
    const response = await fetch(`${window.location.origin}/api/rooms`, {
        method: "POST",
        body: JSON.stringify(options),
        // TODO: uncomment the headers below if you are using the "Create and join room" button locally. You will also need to remove the :disabled attribute from the button itself in Home.vue so it is clickable.
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + "62428a1d5973b014f00edf21111755d0aa6d287bec19f36c10bf60113f40639c",
        },
    });
    const room = await response.json();
    return room;
}

export default {
    createRoom,
};