import { purchasingAgents } from "./companyProvider.js";
import { findAgent } from "./companyProvider.js";
import { agents } from "./agents.js";
import { agentFound } from "./agents.js";

// Global Selectors
const agentSearchResultSection = document.querySelector(".foundAgent")

export const agentList = () => {
    const contentTarget = document.querySelector(".agents__list");
    const agentArray = purchasingAgents;

    contentTarget.innerHTML = agentArray.map((agentObject) => agents(agentObject)).join("");
}

// This is the section that agent search results will be sent to
document
    .querySelector("#agentSearch")
    .addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {
            // Set the user's input to the variable lookingFor
            let lookingFor = keyPressEvent.target.value;
            
            // Call the function findCompany with lookingFor as the parameter and assign the value to foundBusiness
            const foundAgent = findAgent(lookingFor);

            // If the company name of the business object is partly similar to the user input, push to page
            agentSearchResultSection.innerHTML = agentFound(foundAgent);
        }
    });