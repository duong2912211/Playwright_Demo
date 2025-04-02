import { Page } from "@playwright/test";
import LoginPage from "../test/pages/loginPage";

export const pageFixture = {
    // @ts-ignore
    page: undefined as Page,

    // @ts-ignore
    loginPage: undefined as LoginPage,
}