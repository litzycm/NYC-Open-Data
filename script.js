
let animals = [
    {
        animal: "Squirrel",
        condition: "Healthy",
        location: "Central Park"
    },
    {
        animal: "Pigeon",
        condition: "Injured",
        location: "Prospect Park"
    },
    {
        animal: "Hawk",
        condition: "Sick",
        location: "Riverside Park"
    },
    {
        animal: "Rabbit",
        condition: "Unknown",
        location: "Flushing Meadows"
    },
    {
        animal: "Duck",
        condition: "Healthy",
        location: "Pelham Bay Park"
    }
];

function filterData() {

    let selectedCondition =
        document.getElementById("condition").value;

    let results =
        document.getElementById("results");

    results.innerHTML = "";

    animals.forEach(function(animal) {

        if (
            selectedCondition === "All" ||
            animal.condition === selectedCondition
        ) {

            results.innerHTML += `
                <div class="card">
                    <h3>${animal.animal}</h3>
                    <p><strong>Condition:</strong> ${animal.condition}</p>
                    <p><strong>Location:</strong> ${animal.location}</p>
                </div>
            `;
        }
    });
}

filterData();








