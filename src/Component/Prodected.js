import React,{ useEffect} from "react";
import { useNavigate } from "react-router-dom";
function  Protected(props){
    let Cmp =props.Cmp;
    let  navigate=useNavigate('');
    useEffect(
        () => {
            if (!localStorage.getItem('user-info')) {
                navigate('/Register')
            }
        },[]
    );
    return(
        <>
        <Cmp />
        </>
    )
};
export default Protected;