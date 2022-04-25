function menu() {
    const elem = document.getElementById("menu-toggle");
    let dataset = elem.dataset;
    const target = document.getElementById(dataset.target);
    console.log(target.classList.contains(dataset.toggle));
    if (target.classList.contains(dataset.toggle)) {
        target.classList.remove(dataset.toggle);
    }
    else {
        target.classList.add(dataset.toggle);
    }
}