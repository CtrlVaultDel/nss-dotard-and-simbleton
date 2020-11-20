export const companies = (companyObject) => {
    return `
        <section class="company">
            <h2 class="company__name">
                ${companyObject.companyName}
            </h2>
            <div class="company__street">
                ${companyObject.addressFullStreet}
            </div>
            <div class="company__cityStateZip">
                ${companyObject.addressCity}, ${companyObject.addressStateCode} ${companyObject.addressZipCode}
            </div>
        </section>
    `
}