(() => {
    const xhr = new XMLHttpRequest(),
        $xhr = document.getElementById("xhr"),
        $fragment = document.createDocumentFragment();
        
    xhr.addEventListener("readystatechange", e => {
        if (xhr.readyState !== 4){
            return;
        }
        if (xhr.status >= 200 && xhr.status < 300){
            //console.log(xhr);
            //console.log(xhr.responseText);
            //console.log("exito");
            let json = JSON.parse(xhr.responseText);
            //console.log(json);
            json.forEach(element => {
                const $li = document.createElement("li");
                $li.innerHTML = `${element.name} -- ${element.email} -- ${element.phone}`;
                $fragment.appendChild($li);
            });
            $xhr.appendChild($fragment);
        } else {
            //console.log("error");
            let message = xhr.statusText || "Ocurrio un error";
            $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
        }
        
    });

    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

    xhr.send();
})();

(() => {
    const $fetch = document.getElementById("fetch");
    const $fragment = document.createDocumentFragment();
    
    fetch("https://jsonplaceholder.typicode.com/users")
        // Ejecuto un operador ternario que valida si es ok
        // y
        // si no lo es: rechaza la promesa.
        // Al rechazar la promesa, automaricamente se ejecuta el catch()
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        .then(json => {
            //console.log(json);
            //$fetch.innerHTML = json;
            json.forEach(element => {
                const $li = document.createElement("li");
                $li.innerHTML = `${element.name} -- ${element.email} -- ${element.phone}`;
                $fragment.appendChild($li);
            });
            $fetch.appendChild($fragment);
        })
        .catch(err => {
            //console.log("Estamos en el catch ", err);
            let message = err.statusText || "Ocurrio un error";
            $fetch.innerHTML = `Error ${err.status}: ${message}`;
        })
        .finally(() => {
            //console.log("Esto se ejecutará independientemente del resultado de la promesa Fetch");
        });      

})();

(() => {
    const $fetchAsync = document.getElementById("fetch-async");
    const $fragment = document.createDocumentFragment();

    async function getData() {
        try {
            let res = await fetch("https://jsonplaceholder.typicode.com/users");
            let json = await res.json();
            console.log(res, json);
            if (!res.ok) throw {status: res.status, statusTex: res.statusText}

            json.forEach(element => {
                const $li = document.createElement("li");
                $li.innerHTML = `${element.name} -- ${element.email} -- ${element.phone}`;
                $fragment.appendChild($li);
            });
            $fetchAsync.appendChild($fragment);
        }
        catch (err) {
            console.log(err);
            let message = err.statusText || "Ocurrio un error";
            $fetchAsync.innerHTML = `Error ${err.status}: ${message}`;
        }
        finally {
            console.log("Esto siempre se ejecutará")
        }
    }
    
    getData();
})();

(() => {
    const $axios = document.getElementById("axios");
    $fragment = document.createDocumentFragment();

    axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(res => {
            console.log(res);
            let json = res.data;
            json.forEach(element => {
                const $li = document.createElement("li");
                $li.innerHTML = `${element.name} -- ${element.email} -- ${element.phone}`;
                $fragment.appendChild($li);
            });
            $axios.appendChild($fragment);
        })
        .catch(err => {
            console.log(err.response);
            let message = err.response.statusText || "Ocurrio un error";
            $axios.innerHTML = `Error ${err.response.status}: ${message}`;
        })
        .finally(() => {
            console.log("Esto se ejecutará independientemente del resultado de Axios")
        })
    ;
})()