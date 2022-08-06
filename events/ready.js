module.exports = async (client) => {
    client.user.setActivity('a rose | Tag me for me info !', { type: 'WATCHING' })
        .then(presence => console.log("Activity set to " +presence.activities[0].name)+ " !")
        .catch(console.error);

    client.user.setAFK(false)
        .then(console.log("Afk disable")+ " !")
        .catch(console.error);
}