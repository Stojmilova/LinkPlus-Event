export function getAllUsers() {
    return fetch("https://jsonplaceholder.typicode.com/users")
        .then(result => {
            return result.json();
        })
        .then(response => {
            console.log(response);
            return response;
        })
        .catch(error => console.warn(error));
}
export default getAllUsers;