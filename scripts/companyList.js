import { useCompanies } from "./companyProvider.js";
import { newYorkCompanies } from "./companyProvider.js";
import { manufacturingCompanies } from "./companyProvider.js";
import { companies } from "./companies.js";

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