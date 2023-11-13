import "./Home.css";
import MainContener from "../Layout/MainContener";

function Home() {
    return (
        <MainContener >
            <div className="container">
                <div className="row CoverHome">

                    <div className="col-12 col-lg-6 PersonalPhotoDiv">

                        <div className="PersonalPhotoDivI">
                        <img className="PersonalPhotoImg" src="Files/Photo/zakimax.png" alt="Not Found" />
                        </div>


                    </div>

                    <div className="col-12 col-lg-6 DescriptionDiv">

                        <p ><p>My Name Is : <span > Zaki Mohammed </span> </p> <p>- (<span>  Zaki Max </span>) </p></p> 
                        <p > Information Engineer <span>👨‍💻👷</span></p>

                    </div>

                </div>

            </div>
        </MainContener>

    );
}


export default Home ;