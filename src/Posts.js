import { useParams,useLocation } from "react-router-dom";
export default function Post(){
    const {id}=useParams();
    const urlstring=new URLSearchParams(useLocation().search);
    const name=urlstring.get("name");
    const surname=urlstring.get("surname");
    if(id==1) return (<>id: {id} Iphone 13</>);
    if(id==2) return (<>id: {id} Iphone 14</>);
    if(id) return (<>id: {id} no item</>);
    if(name,surname) return(<>
    </>);
    return(<>
        Iphone13<br/>
        Iphone14<br/>
    </>);
}