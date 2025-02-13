
import React from 'react';
import './box.css'
import Box, { Item } from 'devextreme-react/box';
 
class BoxApp extends React.Component {
    render() {
        return (
            <Box id="parentBox"
                direction="col"
                height="100%"
                width={300}>
                <Item baseSize={50} ratio={1}>
                    <div className="box-item yellow"> Item 1 </div>
                </Item>
                <Item baseSize={50} ratio={1}>
                    <Box id="nestedBox"
                        direction="row"
                        height="100%">
                        <Item ratio={1}>
                            <div className="box-item green"> Item 2 </div>
                        </Item>
                        <Item ratio={1}>
                            <div className="box-item orange"> Item 3 </div>
                        </Item> 
                    </Box>
                </Item>
            </Box>
        );
    }
}
 
export default BoxApp;