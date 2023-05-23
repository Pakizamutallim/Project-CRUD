
const submit = document.getElementById("submit")
submit.addEventListener("click", function(){
    const fetched = fetch('https://6469bba8183682d614455b66.mockapi.io/products', {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: document.getElementById("name").value,
            image: document.getElementById("image").value,
            price: document.getElementById("price").value
        }),
      })
      .then(resp => resp.json())
      .then(res => console.log(res))
      .then(res => (res.ok == true))
      {
        document.getElementById("name").value = "";
        document.getElementById("image").value = "";
        document.getElementById("price").value = ""
      }
})
