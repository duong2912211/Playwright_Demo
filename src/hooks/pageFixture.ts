import { Page } from "@playwright/test";
import AdminElements from "../test/elements/adminElements";
import AdminPage from "../test/pages/adminPage";
import DashboardPage from "../test/pages/dashboardPage";
import LoginPage from "../test/pages/loginPage";
import BasePage from "../test/pages/basePage";
import BaseElements from "../test/elements/baseElements";
import LeaveElements from "../test/elements/leaveElements";
import LeavePage from "../test/pages/leavePage";

export const pageFixture = {
    // @ts-ignore
    page: undefined as Page,

    // @ts-ignore
    basePage: undefined as BasePage,

    // @ts-ignore
    baseElements: undefined as BaseElements,

    // @ts-ignore
    loginPage: undefined as LoginPage,

    // @ts-ignore
    adminPage: undefined as AdminPage,

    // @ts-ignore
    adminElements: undefined as AdminElements,

    // @ts-ignore
    dashboardPage: undefined as DashboardPage,

    // @ts-ignore
    leavePage: undefined as LeavePage,

    // @ts-ignore
    leaveElements: undefined as LeaveElements,
}