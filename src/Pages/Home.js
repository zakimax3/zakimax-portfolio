import "./Home.css";
import MainContener from "../Layout/MainContener";

export function Home() {
    return (
        <MainContener >
            <div className="container cont">
                <div className="row cont">

                    <div className="col-12 col-lg-6 centerDiv">

                        <div className="PersonalPhotoDiv">
                        <img className="PersonalPhotoImg" src="Files/Photo/zakimax.png" alt="Not Found" />
                        </div>


                    </div>

                    <div className="col-12 col-lg-6 centerDiv">
                        <p className="pText"> My Name Is <span> Zaki Mohammed </span>  ( <span>Zaki Max</span> ) </p>


                    </div>



                </div>

            </div>
        </MainContener>

    );
}


export default Home ;