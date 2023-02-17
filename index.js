const name = document.getElementById("name");
const tags = document.querySelector(".tags");
const container = document.querySelector(".container");

const addName = () => {
    if(name.value!=="")
    {
    const tag = document.createElement("div");
    tag.setAttribute("class","tag");
    tag.innerText = `Hey, I am ${name.value}`;
    tags.append(tag);
    container.append(tags);
    name.value = "";
    }
}