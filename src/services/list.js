export function getList() {
    return fetch("https://api.spacexdata.com/v4/launches/latest")
        .then(data => data.json())
}
