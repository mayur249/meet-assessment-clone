export const getUserDetails = () => {
    return fetch(`https://randomuser.me/api/?results=8`)
    .then((response) => {
        return response.json();
    })
    .catch((err) => console.log(err));
}