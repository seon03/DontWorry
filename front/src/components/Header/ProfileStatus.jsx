import React from 'react'
import "../../styles = css/ProfileStatus.css"
import img1 from "../../assets/profileimg.png"

export const ProfileStatus = () => {
    return (
            <div className="profile-frame">
            <div className="profile-img">
                <img className="image-11" src={img1} />
            </div>
            <div className="frame-8779">
                <svg
                className="ellipse-816"
                width="191"
                height="33"
                viewBox="0 0 191 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M190.201 22.1234C190.201 30.9594 147.327 32.1228 95.3947 32.1228C43.4619 32.1228 0.201172 32.4594 0.201172 23.6233C0.201172 14.7872 43.4619 0.124512 95.3947 0.124512C147.327 0.124512 190.201 13.2873 190.201 22.1234Z"
                    fill="#D9D9D9"
                    fillOpacity="0.28"
                />
                </svg>
                <div className="profile-title">
                <span>
                    <span className="div-span">당신은</span>
                    <span className="div-span2"></span>
                    <span className="div-span3">예산 지킴이</span>
                    <span className="div-span4">입니다.</span>
                </span>
                </div>
            </div>
            </div>
    )
}

export default ProfileStatus;