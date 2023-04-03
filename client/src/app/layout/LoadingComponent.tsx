import { Button } from 'antd';
import React from 'react'
import Loader from 'semantic-ui-react/dist/commonjs/elements/Loader';
import Dimmer from 'semantic-ui-react/dist/commonjs/modules/Dimmer';

interface Props {
    inverted?:boolean;
    content?:string
}
export default function LoadingComponent({inverted=true,content='Loading...'}:Props){
    return(
        <Button type="primary" size="small" loading>
            Loading
        </Button>
    )
}