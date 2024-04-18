import React, { useState, useRef } from "react";
import Header from "../components/Header/Header";
import ScheduleAddModal from "../components/modals/ScheduleAddModal";
import AccountAddModal from "../components/modals/AccountAddModal";
import ScheduleAccount from "../components/Account/ScheduleAccount";
import { ScheduleProvider } from "../contexts/ScheduleContext";
import '../styles = css/HomePage.css';
import '../styles = css/AddModal.css';



function HomePage() {
    return (
        <ScheduleProvider>
            <div className="home-bg">
                <div style={{}}>
                    <Header />
                    <ScheduleAccount />
                    <ScheduleAddModal />
                    <AccountAddModal />
                </div>
            </div>
        </ScheduleProvider>
    );
}

export default HomePage;