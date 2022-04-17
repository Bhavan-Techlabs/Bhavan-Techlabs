function randomDataGenerate() {
    document.getElementById('random-name').value = jma.name.findName();
    document.getElementById('random-email').value = jma.internet.email();
    document.getElementById('random-city').value = jma.address.city();
    document.getElementById('random-state').value = jma.address.state();
    document.getElementById('random-street').value = jma.address.streetAddress();
    document.getElementById('random-company').value = jma.company.companyName();
    document.getElementById('random-phone').value = jma.phone.phoneNumber();
    document.getElementById('random-vehicle').value = jma.vehicle.vehicle();
    document.getElementById('random-password').value = jma.internet.password();
    document.getElementById('random-department').value = jma.commerce.department();
    document.getElementById('random-product').value = jma.commerce.product();
    document.getElementById('random-paragraphs').value = jma.lorem.paragraphs();
    document.getElementById('random-sentences').value = jma.lorem.sentences();
    let count = +document.getElementById('random-words-count').value;
    document.getElementById('random-words').value = jma.random.alphaNumeric(count);
}

randomDataGenerate();

document.getElementById("gen-random-data-btn").addEventListener("click", randomDataGenerate);