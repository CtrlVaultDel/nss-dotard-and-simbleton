export const agents = (agentObject) =>{
    return `
        <section class="agent">
            <h2 class="agent__name">
                ${agentObject.fullName}
            </h2>
            <div class="agent__company">
                ${agentObject.company}
            </div>
            <div class="agent__phone">
                ${agentObject.phoneNumber}
            </div>
        </section>
    `
}

export const agentFound = (agentObject) =>{
    return `
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
}