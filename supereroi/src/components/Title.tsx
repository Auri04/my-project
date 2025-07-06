import type { PropsWithChildren } from "react";
import './Title.css'

const Title= ({children}: PropsWithChildren) =>{

    return (
        <h1 className="title">{children}</h1>
    );

}
export default Title;