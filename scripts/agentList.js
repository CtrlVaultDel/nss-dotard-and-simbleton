import { purchasingAgents } from "./companyProvider.js";
import { agents } from "./agents.js";

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