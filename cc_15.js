// Task 1 - Creating the Base Structure

const riskDashboard = document.getElementById("riskDashboard");
console.log("Risk Dashboard Loaded"); //Print "Risk Dashboard Loaded" to console

// Task 2 - Adding Risk Items Dynamically

const riskForm = document.getElementById("riskForm");

function addRiskItem(riskName, riskLevel, department) {
    const riskCard = document.createElement("div"); 
    riskCard.setAttribute("class", 'riskCard ${riskLevel.toLowerCase()}'); //Create a new risk card

    const heading = document.createElement("h3");
    heading.textContent = riskName; //Set new risk card risk name

    const level = document.createElement("p");
    level.textContent = 'Risk Level: ${riskLevel}'; //Set new risk card risk level

    const dept = document.createElement("p");
    dept.textContent = 'Department: ${department}'; //Set new risk card department

    const resolveButton = document.createElement("button");
    resolveButton.textContent = "Resolve"; //Add resolve button for risk card

    riskCard.appendChild(heading):
    riskCard.appendChild(level);
    riskCard.appendChild(dept);
    riskCard.appendChild(resolveButton);
    riskDashboard.appendChild(riskCard);
};

//Allow users to input new risk through HTML form
riskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const riskName = document.getElementById("riskName").value;
    const riskLevel = document.getElementById("riskLevel").value;
    const department = document.getElementById("department").value;

    addRiskItem(riskName, riskLevel, department);
    riskForm.reset();
});

//Test cases
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");

// Task 3 - Removing Risk Items

riskDashboard.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        const riskCard = event.target.closest(".riskCard");
        riskDashboard.removeChild(riskCard);
    }; //Add resolve button so when click risk card is removed
});

// Task 4 - Categorizing Risks by Level (html file)

//Test cases
addRiskItem("Cybersecurity Threat", "High", "IT");
addRiskItem("HR Compliance Issue", "Low", "Human Resources");

// Task 5 - Implementing Bulk Updates

const increaseRiskLevelsButton = document.getElementById("increaseRiskLevels");

increaseRiskLevelsButton.addEventListener("click", () => {
    const riskCards = document.querySelectorAll(".riskCard");
    riskCards.forEach(card => {
        const levelElement = card.querySelector("p");
        const currentLevel = levelElement.textContent.replace("Risk Level: ", "");
        let newLevel;
        if (currentLevel ==="Low") {
            newLevel = "Medium";
        } else if (currentLevel === "Medium") {
            newLevel = "High";
        } else {
            newLevel = "High;"
        }; //Add button to dashboard that increases levels
        levelElement.textContent = 'Risk Level: ${newLevel}';
        card.className = 'riskCard ${newLevel.toLowerCase()}';
    });
});

//Test case
addRiskItem("Employee Retention", "Low", "HR");
// Clicking "Increase Risk Levels" should change it to "Medium".

// Task 6 - Handling Event Propagation

riskDashboard.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        event.stopPropagation();
        const riskCard = event.target.closest(".riskCard");
        riskDashboard.removeChild(riskCard);
    };
}); //Ensure no unwanted risk card clicking

//Test cases
// Click inside a risk card should not trigger a dashboard-wide event.
