let input = document.querySelector("input#inputfile");
let image = document.querySelector("img");
let label = document.querySelector("label");
input.addEventListener("change", eventhandler);
function eventhandler(e) {
    console.log(input.files);
    label.textContent = input.files[0].name;
    let fileReader = new FileReader();
    fileReader.onload = () => {
        image.src = fileReader.result;
        image.hidden = false;
    };
    fileReader.readAsDataURL(input.files[0]);
    // let formData = new FormData();
    // formData.append("name", "vinod");
    // formData.append("image", input.files[0]);
    // fetch("http://localhost:3000", {
    //   method: "POST",
    //   body: formData,
    // }).catch((err) => console.log(err));
}
