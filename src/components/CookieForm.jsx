import {useState} from 'react';

const CookieForm = props => {

    const [cookie, setCookie] = useState({
        name:"",
        type:"",
        calories:0
    });


    const handleCookieChange = e => {
        setCookie({
            ...cookie,
            [e.target.name]: e.target.value
        })
    }

    



    return (
        <form className="col-4 mx-auto" style={{backgroundColor:"peachpuff"}} >
            <h1 className="text-center">Add A Cookie</h1>
            <div className="form-group">
                <label>Name:</label>
                <input 
                    type="text" 
                    name="name" 
                    className="form-control"
                    onChange={handleCookieChange}
                />
                <span className="text-danger">
                    { cookie.name.length < 5 ? "Cookie name must be at least 5 characters." :"" }
                </span>
            </div>
            <div className="form-group">
                <label>Type:</label>
                <input 
                    type="text" 
                    name="type" 
                    className="form-control"
                    onChange={handleCookieChange}
                />
                <span className="text-danger">
                    { cookie.type.length < 5 ? "Cookie type must be at least 5 characters." :"" }
                </span>
            </div>
            <div className="form-group">
                <label>Calories:</label>
                <input 
                    type="number" 
                    name="calories" 
                    className="form-control"
                    onChange={handleCookieChange}
                />
                <span className="text-danger">
                    { cookie.calories <= 250 ? "That's not a cookie. Throw it in the trash" :"Looks Good!" }
                </span>
            </div>

            {
                cookie.name.length >= 5 && cookie.type.length >= 5 && cookie.calories > 250 ? 
                    <input type="submit" value="Add Cookie" className="btn btn-primary"/> :
                    <input type="submit" value="Not A Cookie" className="btn btn-disabled" disabled/>
            }
        </form>
    );
}

export default CookieForm;