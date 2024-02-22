import React, {useState, useEffect} from 'react';

export default function Github(){
    const [repositories, setRepositories] = useState([]);
    useEffect(()=>{
        fetch('https://api.github.com/users/feliciamuller/repos')
        .then(response => response.json())
        .then(data =>setRepositories(data))
        .catch(error=>console.error('Kunde inte läsa av datan', error));
    }, []);
    return (
        <div class ="repos-container">
        {
        repositories.length > 0 ? (
            repositories.map(repo => (
                <section class ="repos-content">
                    <a class = "repo-links" href={repo.html_url}>{repo.name}</a>
                </section>   
            ))
        ):(<p>Repositorys laddar...</p>)}
        </div>
    );
}
