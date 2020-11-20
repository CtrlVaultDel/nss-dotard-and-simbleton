import { useCompanies } from "./companyProvider.js";
import { newYorkCompanies } from "./companyProvider.js";
import { manufacturingCompanies } from "./companyProvider.js";
import { companies } from "./companies.js";
import { findCompany } from "./companyProvider.js";

export const companyList = () => {
    const contentTarget = document.querySelector(".businessList--All");
    const companyArray = useCompanies();
    contentTarget.innerHTML = `<h1 class="listHeader">Active Businesses</h1>`;

    companyArray.forEach(
        (companyObject) => {
            contentTarget.innerHTML += companies(companyObject);
        }
    );
}

export const newYorkCompanyList = () => {
    const contentTarget = document.querySelector(".businessList--NewYork");
    contentTarget.innerHTML = `<h1 class="listHeader">New York Businesses</h1>`;

    newYorkCompanies.forEach(
        (companyObject) => {
            contentTarget.innerHTML += companies(companyObject);
        }
    );
}

export const manufacturingCompanyList = () => {
    const contentTarget = document.querySelector(".businessList--Manufacturing");
    contentTarget.innerHTML = `<h1 class="listHeader">Manufacturing Businesses</h1>`;

    manufacturingCompanies.forEach(
        (companyObject) => {
            contentTarget.innerHTML += companies(companyObject);
        }
    );
}

// This is the article that company search results will be sent to
const companySearchResultSection = document.querySelector(".foundCompany")

document
    .querySelector("#companySearch")
    .addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {
            console.log(keyPressEvent.target.value);

            // Set the user's input to the variable lookingFor
            let lookingFor = keyPressEvent.target.value;
            
            // Call the function findCompany with lookingFor as the parameter and assign the value to foundBusiness
            const foundBusiness = findCompany(lookingFor);

            // If the company name of the business object is partly similar to the user input, push to page
            if (foundBusiness.companyName.includes(keyPressEvent.target.value)){
                companySearchResultSection.innerHTML = `
                <h2 class="company__name">
                    ${foundBusiness.companyName}
                </h2>
                <div class="company__street">
                    ${foundBusiness.addressFullStreet}
                </div>
                <div class="company__cityStateZip">
                ${foundBusiness.addressCity}, ${foundBusiness.addressStateCode} ${foundBusiness.addressZipCode}
                </div>`;
            }
        }
    });