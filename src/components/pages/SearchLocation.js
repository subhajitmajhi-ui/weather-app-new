import React, { useContext } from 'react'
import Context from '../../Context';

const backImgStyle = {
    backgroundImage: "url(assets/images/place/kolkata.png)"
}



const SearchLocation = () => {
    const {api_call} = useContext(Context);

    return (
        <>
            <div className="hero" style={backImgStyle} data-bg-image="assets/images/banner.png">
                <div className="container">
                    <form onSubmit={api_call} className="find-location">
                        <input type="text" name="location" placeholder="Find your location..." />
                        <input type="submit" value="Find" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default SearchLocation