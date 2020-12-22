export const agents = (agentObject) =>`
        <section class="agent">
            ${agentTemplate(agentObject)}
        </section>
    `

export const agentFound = (agentObject) => agentTemplate(agentObject);

const agentTemplate = (agentObject) => `
    <h2 class="agent__name">
            ${agentObject.fullName}
        </h2>
        <div class="agent__company">
            ${agentObject.company}
        </div>
        <div class="agent__phone">
            ${agentObject.phoneNumber}
        </div>
    `