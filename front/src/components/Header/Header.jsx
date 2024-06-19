import React from 'react'
import MenuButton from '../ui/MenuButton';
//import ProfileStatus from './ProfileStatus';
//import AlertButton from '../ui/AlertButton';
import BudgetStatus from '../Budget/BudgetStatus';
import "../../styles = css/Header.css"


function Header () {
    return (
            <header className="budget-header">
                <div className="profile-header">
                    <MenuButton />
                    {/*<AlertButton />*/}
                </div>
                <BudgetStatus />
            </header>

    );
}

export default Header;
