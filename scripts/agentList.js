import { purchasingAgents } from "./companyProvider.js";
import { findAgent } from "./companyProvider.js";
import { agents } from "./agents.js";
import { agentFound } from "./agents.js";

export const agentList = () => {
    const contentTarget = document.querySelector(".agents");
    const agentArray = purchasingAgents;
    contentTarget.innerHTML = `<h1 class="listHeader">Purchasing Agents</h1>`;

    agentArray.forEach(
        (agentObject) => {
            contentTarget.innerHTML += agents(agentObject);
        }
    );
}

// This is the section that agent search results will be sent to
const agentSearchResultSection = document.querySelector(".foundAgent")

document
    .querySelector("#agentSearch")
    .addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {
            console.log(keyPressEvent.target.value);

            // Set the user's input to the variable lookingFor
            let lookingFor = keyPressEvent.target.value;
            
            // Call the function findCompany with lookingFor as the parameter and assign the value to foundBusiness
            const foundAgent = findAgent(lookingFor);

            // If the company name of the business object is partly similar to the user input, push to page
            agentSearchResultSection.innerHTML = agentFound(foundAgent);
        }
    });