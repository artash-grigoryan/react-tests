import React, {useState} from "react";

function Search() {
    let [errorMessage, setErrorMessage] = useState("");
    let [usersList, setUsersList] = useState([]);

    const searchUser = (event) => {
        let q = event.target.value;

        fetch(`https://api.github.com/search/users?q=${q}`)
            .then(response => {
                // console.log(response.status);
                if (response.status === 403) {
                    setUsersList([]);
                    throw response.statusText;
                }
                return response.json()
            })
            .then((data) => {
                setUsersList(data.items || []);
                if (usersList.length === 0) {
                    setErrorMessage("No users found");
                }
            })
            .catch((error) => {
                setErrorMessage(error);
                setUsersList([]);
            })

    };

    return (
        <div className="search">
            <h1>[front/react] Github user search</h1>
            <input type="text" onChange={searchUser}/>
            <div>
                {
                    usersList.map((user, index) => <div key={index}>
                        {user.id};{user.login};{user.id}
                    </div>)
                }
                {
                    errorMessage !== "" && errorMessage
                }
            </div>
        </div>

    );
}

export default Search;
