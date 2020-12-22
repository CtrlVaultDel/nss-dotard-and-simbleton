export const companies = (companyObject) => `
        <section class="company">
            ${companiesTemplate(companyObject)}
        </section>
    `

export const companiesTemplate = (companyObject) => `
        <h2 class="company__name">
            ${companyObject.companyName}
        </h2>
        <div class="company__street">
            ${companyObject.addressFullStreet}
        </div>
        <div class="company__cityStateZip">
            ${companyObject.addressCity}, ${companyObject.addressStateCode} ${companyObject.addressZipCode}
        </div>
    `